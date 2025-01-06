import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import {Carousel, CarouselContent, CarouselItem,} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import data from "./data.json";

function App() {
  return (
    <div className="presentation-wrapper">
  <div className="presentation-text-wrapper">
    <p className="presentation-text">
      <p className="highlight">Hello!</p>
      I'm Alexandre, a <span className="highlight">Full Stack Developer</span> with expertise in modern web technologies and a growing passion for <span className="highlight">Artificial Intelligence</span> and <span className="highlight">Computer Vision</span>. With a degree in System Analysis and Development from <span className="highlight">UFPR (Federal University of Paraná)</span>, I combine strong foundational development skills with cutting-edge technology exploration.
    </p>
  </div>
</div>

<h3 className="mb-20" id="about-me">
  About Me
</h3>

<div className="about-wrapper">
  <div className="about-text-wrapper">
    <p>
      While I excel in web development, I'm also deeply interested in AI and Computer Vision, actively working on projects involving <span className="highlight">TensorFlow</span> and <span className="highlight">PyTorch</span>. My focus is on bridging the gap between web technologies and AI applications, exploring innovative ways to integrate machine learning models into web platforms.
    </p>
    <p>
      I'm always eager to take on new challenges and contribute to projects that push the boundaries of technology. Whether it's building scalable web applications or delving into the fascinating world of AI, I bring a <span className="highlight">passionate</span> and <span className="highlight">dedicated</span> approach to every project.
    </p>
    <p>
      Currently, I'm seeking opportunities to leverage my web development expertise while continuing to grow in the AI field. Open to <span className="highlight">collaboration</span> and new challenges! Let's work together to create something incredible.
    </p>
  </div>
</div>


      <h3 className="mb-20" id="knowledge">
        Skills
      </h3>

      <div className="knowledge-wrapper">
        <Carousel className="w-full" opts={{loop: true}} plugins={[
          Autoplay({
            delay: 2000,
            stopOnInteraction: false
          }),
        ]}>
          <CarouselContent className="-ml-1">
            {data.knowledge.map((item, index) => (
              <CarouselItem key={index}
                            className="pl-1 basis-1/2 tablet:basis-1/3 laptop:basis-1/4 laptopL:basis-1/5 4k:basis-1/12 ultrawide:basis-80">
                <div className="p-1">
                  <Card className="border-0">
                    <CardContent
                      className="flex aspect-square items-center justify-center p-6 bg-slate-900 rounded-xl flex-col">
                      <img src={item.url} alt="" className={`w-3/4 h-3/4 ${item.invert && 'invert'}`}/>
                      <span className="text-slate-400 font-black mt-7 text-1xl text-center">{item.title}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <h3 className="mb-20" id="projects">
        Projects
      </h3>

      <div className="project-wrapper">
        <div className="project-list-wrapper">
          {data.projects.map((item, index) => (
            <Card
              className={`display-flex border-0 ${index % 2 === 0 ? 'laptop:flex-row-reverse' : 'laptop:flex-row'} flex-col-reverse mb-24 laptop:mb-0`}>
              <CardHeader className="display-flex w-[650px] -my-20">
                <CardTitle
                  className={`font-raleway text-xl laptop:text-4xl font-black ${index % 2 === 0 ? 'laptop:text-left' : 'laptop:text-right'} text-center`}>Project
                  #{(index + 1).toString().padStart(2, '0')} - {item.title}</CardTitle>
                <CardDescription
                  className={`font-raleway text-[10px] laptop:text-sm font-black ${index % 2 === 0 ? 'laptop:text-left' : 'laptop:text-right'} text-center`}>
                  <div dangerouslySetInnerHTML={{__html: item.description}}/>
                </CardDescription>
                <CardDescription
                  className={`font-raleway text-[12px] laptop:text-lg text-slate-300 italic ${index % 2 === 0 ? 'laptop:text-left' : 'laptop:text-right'} text-center`}>{item.techs}</CardDescription>
                <CardDescription
                  className={`font-raleway text-sm laptop:text-2xl font-black text-slate-300 italic ${index % 2 === 0 ? 'laptop:text-left' : 'laptop:text-right'} text-center`}>
                  {
                    item.url ? (<a href={item.url}>Access Project</a>) : 'Comming Soon'
                  }
                </CardDescription>
                {item.url && item.source && (
                  <CardDescription
                    className={`font-raleway text-sm laptop:text-xl font-black text-slate-300 italic ${index % 2 === 0 ? 'laptop:text-left' : 'laptop:text-right'} text-center`}>Source
                    Code: <a href={item.source}> Here</a>
                  </CardDescription>
                )}
              </CardHeader>
              <CardContent className="display-flex text-center">
                <img className="project-image"
                     src={`${item.url_logo}`}
                     alt="teste"/>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
