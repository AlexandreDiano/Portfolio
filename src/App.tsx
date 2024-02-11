import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import {Carousel, CarouselContent, CarouselItem,} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import data from "./data.json";

function App() {
  return (
    <div className="container">
      <h2 className="mb-20" id="presentation">
        Alexandre Diano
      </h2>

      <div className="presentation-wrapper">
        <div className="presentation-text-wrapper">
          <p className="presentation-text">
            <p className="highlight">Hello!</p>
            I'm Alexandre and I work as a <span className="highlight">developer</span>, focused in web
            apps. I love innovations and <span className="highlight">creating new things to help as I can</span>. I
            really enjoy technology and <span className="highlight">Artificial Intelligence</span> as I wish to work
            around these skills to collaborate
            with the scientific community and find out
            new and incredible things.
          </p>
        </div>
        <div className="presentation-image-wrapper">
          <div className="presentation-image"></div>
        </div>
      </div>

      <h3 className="mb-20" id="about-me">
        About Me
      </h3>

      <div className="about-wrapper">
        <div className="about-text-wrapper">
          <p>
            I always loved technology but it wasn’t until 2018 that I started programming when I got in a SENAI’s system
            development course and found it quite interesting. I've concluded it by 2019 and then started <span
            className="highlight">Physics Bachelor graduation in UFPR.</span> I always liked STEM, but I came to realize
            my true love for codding at the first semester, and after that, I changed my graduation for System Analysis
            and Development (also at UFPR), recently I've started studying about IoT and I've grown taste for it and it
            becomes a goal to study about <span className="highlight"> Robotics in Artificial Intelligence</span> on
            some master degree... what I learn in physics is love the science community so I decided to join on
            searching for new discoveries but now <span className="highlight">I want to help this community working with Robotics in AI</span>,
            maybe join this incredible area with Web Development who knows what's possible to do.

            <p className="highlight m-10">let's try new things.</p>

            That's what I have to say for now. If you have any doubt, do not hesitate calling me. Hope we'll be in touch
            soon!
          </p>
        </div>
      </div>

      <h3 className="mb-20" id="knowledge">
        Knowledge
      </h3>

      <div className="knowledge-wrapper">
        <Carousel className="w-full" opts={{loop: true}} plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}>
          <CarouselContent className="-ml-1">
            {data.knowledge.map((item, index) => (
              <CarouselItem key={index}
                            className="pl-1 basis-1/2 tablet:basis-1/3 laptop:basis-1/4 laptopL:basis-1/5 4k:basis-1/12">
                <div className="p-1">
                  <Card className="border-0">
                    <CardContent
                      className="flex aspect-square items-center justify-center p-6 bg-slate-900 rounded-xl flex-col">
                      <img src={item.url} alt="" className="w-3/4 h-3/4"/>
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
