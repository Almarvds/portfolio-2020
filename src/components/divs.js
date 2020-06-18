import React from 'react';
import { Row, Col, Button, Card, Nav, Accordion } from 'react-bootstrap';
import reportLinks from './reportLinks.js'

const divs= [

  /*number 1*/

  <div className= 'divBase'>
    <Row>
      <Col className='middle'>
        <div className = 'dropText'>
          <h3>Are you a Brabander?</h3>
          <h6>Using AI for local accent or dialect recognition</h6>
          <p>Regional inclusion is a topic that comes up all too often in local municipal decision making,
          however when we really think about it, the feeling of inclusion in a region is hard to pin down.
          This design was made specifically for the Brabant area, where we tried to challenge the notion of what it means to be a local.
          The design features a speech algorithm that leverages machine learning to score the accent or dialect of a participant on how regional they really sound.
          By doing so, we hoped to show people that representation is not always dependent on the typical parameters like speech or appearance.
          In this project I learned to work with industry standard machine learning tools like Tensorflow and learned how to tailor AI to users by allowing users to conrol the dataset.
          </p>
        </div>
      </Col>
      <Col className='middle'>
        <img alt='' style={{width:'100%'}}src= {process.env.PUBLIC_URL+'images/other/bbr.svg'}/>
      </Col>
    </Row>
    <Row>
      <div className = 'buttonRow mx-auto'>
        <Button href={reportLinks[2]} style={{margin:'2vh'}} variant="outline-secondary" size="lg">Read reflection</Button>
        <Button href={reportLinks[1]} style={{margin:'2vh'}} variant="outline-secondary" size="lg">Read report</Button>
        <Button href={reportLinks[0]} style={{margin:'2vh'}} variant="outline-secondary" size="lg">Check out the video</Button>
      </div>
    </Row>
  </div>,

  /*number 2*/

  <div className= 'divBase'>
    <Row>
      <Col className='middle'>
        <img alt='' src= {process.env.PUBLIC_URL+'images/other/bracelets1.jpg'}/>
      </Col>
      <Col className='middle'>
        <div className = 'dropText'>
          <h3>RecoFriend</h3>
          <h6>Predicting friendships through machine learning</h6>
          <p>RecoFriend is a project that I worked on in late 2019.
          These handmade bracelets are meant to be worn at social gatherins or events as a social initiator.
          Based on the data profile of the wearer it sends them on a guided quest to find the perfect conversation partner.
          The search is guided by the bracelets giving directions through LED that are woven into the fabric. Matchmaking is based
          on a simple k-nearest algorithm, using user interests as its data input. In this course I learned a lot about the social consequences of classifications.
          It became apparent to me that with machine learning, which is a numbers game, the designer needs to think about what will happen to the experience if a prediction is not correct.
          </p>
        </div>
      </Col>
    </Row>
    <Row>
      <div className = 'buttonRow mx-auto'>
        <Button href={reportLinks[3]} variant="outline-secondary" size="lg">Read report</Button>
      </div>
    </Row>
  </div>,

  /*number 3*/

  <div className= 'divBase'>
    <Row>
      <Col className='middle'>
        <div className = 'dropText'>
          <h3>Paper on ML interaction</h3>
          <h6>Towards Guidelines for Designing Human-in-the-Loop Machine Training Interfaces</h6>
          <p> This paper I wrote together with Dr. Mathias Funk in early 2019 discusses evaluation methods for machine training interfaces.
          Considering the increasing applications of machine learning and its availability, we have to consider the user experience of training these systems.
          After all, training big datasets can take a long time, meaning we should find a method that is both efficient in training as well as fast to operate for the human trainer.
          In this study we compare a few different training methods and provide an example of how to structure frameworks to properly assess them.
          This taught me a lot of academic skills, to this day we are still reworking this paper and waiting for it to be accepted to a conference.
          Aside from the academic skills, it also taught me how to set up a research procedure and collect credible results. To come up with the test I
          also had to improve my knowledge on interaction with learning systems and how we can quantify succesful interaction.
          </p>
        </div>
      </Col>
      <Col className='middle'>
        <img alt='' src= {process.env.PUBLIC_URL+'images/other/all_screens.jpg'}/>
      </Col>
    </Row>
    <Row>
      <div className = 'buttonRow mx-auto'>
        <Button href={reportLinks[6]} style={{margin:'2vh'}} variant="outline-secondary" size="lg">Read reflection</Button>
        <Button href={reportLinks[5]} style={{margin:'2vh'}} variant="outline-secondary" size="lg">Read report</Button>
        <Button href={reportLinks[4]} style={{margin:'2vh'}} variant="outline-secondary" size="lg">Check out the video</Button>
      </div>
    </Row>
  </div>,

  /*number 4*/

  <div className= 'divBase'>
    <Row>
      <Col className='middle'>
        <img alt='' src= {process.env.PUBLIC_URL+'images/other/tech stack finak.png'}
        style={{backgroundColor:'white',padding:'2%'}}/>
      </Col>
      <Col className='middle'>
        <div className = 'dropText'>
          <h3>Moneble</h3>
          <h6>Building a cloud hosted full stack application</h6>
          <p>For my graduation project, Moneble, I learned to build a full stack architecture in the cloud.
          This project taught me how to work with a number of technologies, but most of all taught me how web technologies work as a whole.
          I belive that this really sets me apart as a designer, and allows me to prototype unique solutions.
          Aside from being a better developer and helping me prototype more intricate products,
          it also gives me a UX advantage, having a better idea of what is possible and works well on the development side.
          Combined this advantage is really valuable, especially in the innovation ecosystem where that combined skillset is highly requested.
          </p>
        </div>
      </Col>
    </Row>
    <Row>
      <div className = 'buttonRow mx-auto'>
      <Button href={reportLinks[8]} style={{margin:'2vh'}} variant="outline-secondary" size="lg">Read report</Button>
      <Button href={reportLinks[7]} style={{margin:'2vh'}} variant="outline-secondary" size="lg">Check out the video</Button>
      </div>
    </Row>
  </div>,

  /*number 5*/

  <div className= 'divBase'>
    <Row>
      <Col className='middle'>
        <div className = 'dropText'>
          <h3>App adoption</h3>
          <h6>Simulating app adoption to inform business strategy</h6>
          <p>For the course Complex adaptive systems in early 2019, I took it upon myself to simulate the adoption of apps across users in an ecosystem.
          This is a complex system because it is influenced by so many parameters that it becomes extremely volatile and hard to predict.
          In this simulation however, we attempted to map all of those factors and give one the ability to customize them to find the best strategy.
          Using this application, one can compare different strategies and see what strategy would lead to the highest adoption across time.
          The data is based on historical market performance for apps in the app store. In this project I really learned how to take a systematic approach to development.
          When thinking out a model like this, everything needs to work exactly as imagined and the way different factors influence each other all needs to be taken into account.
          </p>
        </div>
      </Col>
      <Col className='middle'>
        <img alt='' src= {process.env.PUBLIC_URL+'images/other/graph.png'} style={{backgroundColor:'white', padding:'2%'}}/>
      </Col>
    </Row>
    <Row>
      <div className = 'buttonRow mx-auto'>
        <Button href={reportLinks[10]} style={{margin:'2vh'}} variant="outline-secondary" size="lg">Read reflection</Button>
        <Button href={reportLinks[9]} style={{margin:'2vh'}} variant="outline-secondary" size="lg">Read report</Button>
      </div>
    </Row>
  </div>,

  /*number 6*/

  <div className= 'divBase'>
    <Row>
      <Col>
        <Row className='justify-content-md-center'>
        <img alt='' style={{margin:'2%'}} src= {process.env.PUBLIC_URL+'images/other/flutter_app.jpeg'}/>
        <img alt='' style={{margin:'2%'}} src= {process.env.PUBLIC_URL+'images/other/flutter_app2.jpeg'}/>
        </Row>
      </Col>
      <Col className='middle'>
        <div className = 'dropText'>
          <h3>Froggy</h3>
          <h6>A native Flutter application for speech therapy</h6>
          <p>Froggy is the mobile application that we developed for the IGMES speech therapy program.
          As a product, we provided a new rehabilitation methodology for speech therapists, where users were supported to keep talking by a mobile application.
          With a focus on daily practice, the app prompts the user to have one talk a day and log their experiences. For doing so, they are awarded with xp and they can level up their Froggy.
          The application was built using the Flutter framework and features a user community where users can exchange tips and best practices for learning to speak.
          This project showcases and makes up my experience in developing and designing for mobile, a skill that is highly valued for modern designers.
          </p>
        </div>
      </Col>
    </Row>
    <Row>
      <div className = 'buttonRow mx-auto'>
      </div>
    </Row>
  </div>,

  /*number 7*/

  <div className= 'divBase'>
    <Row>
      <Col className='middle'>
        <div className = 'dropText'>
          <h3>Vision  </h3>
          <h6>A transparent and democratic future</h6>
          <p>Over the past few years, I have come to be a big believer in classical Stoic philosophy. A big part of these philosophies is following objective truths over impulses, carefully verifying actionable ideas through logic and the scientific method. It teaches that you gain freedom from being transparent, as it more clearly
          defines what is within your control to both you and others, while also allowing them to understand you better. The way I see it, nontransparent methods have been underlying catalyzers of several issues in
          society, as they make it harder for us to understand each other’s perspectives. Seeing what comes forth from these issues, I believe that transparency and vulnerability are exactly what people are longing for.
          At the same time, my interests bring me to the tech industry. I have always played around with devices and have always loved creating things. Hacking stuff together brings me a lot of joy, because it always reminds you that, while it may feel like it is not malleable, the world around you is built by people just like you. When you start hacking something together, you discover that the level of intricacy involved for most things is actually pretty conceivable and reproducible. I experience that to be very empowering. When you use the creative processes from design practice while questioning the status quo and combining that with the hacking skills that you see in the tech industry, that’s where my favorite innovations tend to happen.
          Finally, I would like to impact the digital field. Like for many of my friends, so much of my growing up happened on the internet. So many things that my parents did not teach me I learned online. This is why I love to work in the digital space and create new ways for people to experience togetherness, connect, and learn from each other.
          </p>
          <h6>Societal challenge</h6>
          <p>I now find myself in this interesting spot where one of my biggest values is transparency, with an
          emphasis on top-down transparency, but the industry I’m in, regardless of its scientific roots is led by companies that thrive on being nontransparent. Somehow, an industry that was formed around bringing scientific ideas into practice for the masses, now often has the masses as its product rather than its market, in the form of data. That problem is emphasized when we look at machine learning, where data is power and the amount of data governed by each party is frequently unknown. AI is often referred to as an arms race, especially when comparing the west with China.
          </p>
          <p>The reality, however, is that we are nowhere near the consequences of AI development becoming an
          arm-able threat. Instead, AI and data collection have had more impact economically than anything. As much as with other forms of wealth, the largest portions of data are controlled by only a handful of parties. With machine learning definitely being a numbers game, the most data really does simply tend to result in the best models. Not only is the way that data is controlled inherently undemocratic, because it limits the scope of open source development and thus blocks out the competition, but it also allows for the incorporation of biases that have an economical incentive. If businesses let their trained models
          govern user behavior, we best be sure that the limits of their black box models are clearly defined so that they cannot hide their own decision making within or behind that of an intelligent model.
          </p>
          <p>When systems make data-driven decisions they often lack the nuance that goes into human decision
          making. Some variables, like context or atmosphere, are extremely tough to identify, as they are
          ever-changing and subject to human interpretation. , because of this exact phenomenon, I feel that there is one major theme that can help us live alongside increasingly complex technology. Something I like to refer to as meaningful algorithms. A meaningful algorithm is a combination of human cognitive
          abilities and computing power, where we scale the understanding of nuance, values, and ethics that we have as people, together with the raw number-crunching abilities of systems. When properly combined they are able to produce the most suitable solutions to the problems that we face on a daily basis.
          Meaningful algorithms can operate in a few different states of awareness, being the differentiation
          between the extent to which they have access to information about their operating context. This point of being meaningful comes from drawing the line in functionality at different states, depending on your product. For instance, a scale might need very little awareness while a digital assistant requires a lot of it to be meaningful.
          </p>
          <p>
          A secondary theme, that is deeply interwoven with the first one, is the theme of technology acceptance through interface expression. Meaningful algorithms lose their ability to carry over the interests of all humans if certain groups in society are not properly represented by them. After all, if a system does not have data on you, it could never account for your wants and needs when considering solutions for the collective. Knowing this I think it is important that systems remain approachable and transparent as they grow more complex, otherwise, we as engineers would be promoting the marginalization of groups that struggle with accepting new technology or choose to ignore it altogether. Through expressive
          interfaces that show the boundaries and conditions in which our systems operate, we can have a more healthy relationship with our devices, while maintaining their clearly defined functionalities. By
          implementing such changes we can counteract a lot of the reasons for customers to stop using new
          technologies, like high learning curves, uncertainty about the use of their data, and fear of system
          intelligence. Once again, transparency.
          </p>
          <h6>My role in establishing change</h6>
          <p>
          As a spokesperson for my vision, I believe that for me to properly communicate my values I will need to
          bring together a more coherent idea of the technicalities behind my vision. If I can do this, I want to
          publish my ideas from a platform that allows me to garner attention. I do believe that as with many
          transformative principles, this requires a pre-existing platform or measure of success for others to tend to
          listen to you. Having said that, I look to acquire such a platform by finding success in technology
          entrepreneurship, showing competence in the exact market where my vision is most relevant. In doing so
          I hope to find a more horizontal platform to speak on these issues with industry leaders. I also hope to
          gain more understanding of the principles that govern intelligent systems, so that I can better
          communicate the steps we could collectively take towards achieving my vision.
          Most of all I want to introduce top-down transparency, while I am making my way up. Documentation
          and communication are key when it comes to this because they allow for a proper narrative towards the
          rest of the world. If I were to do very well in the industry, or lead/work at a successful start/scale-up, it
          will be because I bring honesty surrounding decisions made by that business. Not only does it help people
          understand why certain decisions are made, it also garners respect for the obstacles that are to be
          overcome in the industry, which might not be understood by everyone.
          </p>
          <h6>Role of designers and engineers</h6>
          <p>
          Engineers and designers have a unique role to play in the challenge I portrayed in the previous sections.
          Engineers should be supported by cognitive and human-computer interaction experts, to bring the
          aforementioned nuance and values to systems. Designers have a similar role to play, in making the systems
          communicate in such a way that their boundaries are clear to people. The most important aspect here
          is that systems do not come across as being intimidating. Their intelligence should be shown to remain
          within their functionality. When designers can adapt technology in such a way that its full functionality is
          displayed comprehensively and that its use is intuitive, they will have done a proper job. This all comes
          down to the state of system awareness. A good designer knows what level of awareness or intelligence a
          system requires to be meaningful and makes that level apparent in the design interaction as well.
          Outside of the systems we work on we can also influence the institutions or markets we are a part of. I
          believe that if we build businesses around good customer communication, showing transparency in why
          and how they make certain decisions, users will eventually favor that over the alternative. In the end, users
          want to feel comfortable with what they are using, not questioning it in the back of their minds. I have
          been in this position myself many times, where making the convenient decisions offered by a service
          forces me to consider what data they may be collecting in the background. In the end, this makes for a
          scenario where users can not focus on interacting with a product in the moment and get the full
          experience.
          </p>
        </div>
      </Col>
    </Row>
  </div>,

  /*number 8*/

  <div className= 'divBase'>
  <Row>
    <Col className='middle'>
      <div className = 'dropText'>
        <h3>About me  </h3>
        <h6>A UX designer and developer of digital intelligent systems</h6>
        <p>As a professional, I classify myself as a UX designer and developer of digital and intelligent systems.
        I focus on the combination of entrepreneurship with technically complex products entering the market.
        Sometimes I will also market myself as a UX designer, product designer, or front-end developer since these fall within my skill set and it can help communicate what role I am best at fulfilling within certain groups.
        </p>
        <h6>Skillset</h6>
        <p>My skill set is heavily influenced by my vision and interest, meaning they lean towards design, technical development, and business. As a designer, I look to bring in high-level prototypes since it allows for
        showcasing the subtleties that are so highly valued in my vision. I also think that with increasingly
        complex systems, designers need to be able to deliver increasingly high-level prototypes to be able to properly test for user experiences.
        My skills as such, are mostly related to technical development and product road to market, all while keeping in mind a lot of the user-centered design principles.
        Other than that, my soft skills tend to be geared towards leadership traits, presenting or public speaking being the main one.
        </p>
        <h6>Character</h6>
        <p>
        As a person I tend to be a little too precarious, meaning I often tend to go from very serious to being zoned out. Overall people see me as
        being very ambitious and highly motivated.Although I am good at public or leading roles, they do cost me energy and I prefer to recharge by doing solo creative or technical work.
        From time to time I can feel like I lack empathy when it comes to the workplace.
        I tend to put quite a lot of value on achievement and concrete results, rather than processes, which is something I would like to change in the future.
        </p>
      </div>
      <div className = 'dropText'>
        <h3>Discrepancy vision and identity  </h3>
        <h6>Continuing my path in the future</h6>
        <p>Having taught the professional identity and vision course for the last couple of years I always stress the importance of having a plan that closes the gap between your vision and identity.
        Not only does that mean getting yourself in a position to carry out your vision, but also to get your skillset to the point of being able to perform those actions needed. For me that looks like the following:
        </p>
        <h6>Long term plans to implement my vision</h6>
        <p>
        To be able to properly frame my vision I need to know what the implementation of it on a technical level could look like. For me, this means knowing how we can properly integrate complex technology and our values, without giving up too much in terms of performance. As such I should look to gain a good
        fundamental understanding of machine intelligence and computer science on both the lower and
        interaction level.
        In applying that knowledge, I am looking to attain a workflow and supporting skill set that allows me to rapidly prototype learning or digital systems and place them in a user context.
        Besides that one of my goals is to acquire a platform to transform the use of complex technology. The best way to do this is to succeed in the product market. This process requires me to be good at
        successfully bringing products to the market. With my current skills in innovation and enrollment in the DLE track, I think I am already well on my way, however, it would help greatly if I learned more about larger-scale commercial production and actual product deployment.
        </p>
        <h6>Market & Industry</h6>
        <p>
        Placing myself in the market or industry in accordance with my vision could be done in two different ways. The first one is to keep attempting to grow my own business from scratch or join a newly formed team in a startup. This allows me to right away attempt to bring my vision into reality.
        The second method, however, considers that I am currently not the most experienced entrepreneur and designer, pointing me to an environment where I can learn more first. That would consist of a scale-up or smaller business actively looking to grow in the digital space. I would then have the opportunity to learn from how others are doing it, while also contributing my vision to an extent already. This should then allow me to have a higher chance of success when I do start my own project.
        To further elaborate on this, in the final semesters of my education, I have developed a skill set that is in high demand in these specific markets. While generally the tasks that I took on my projects are split between people in larger corporates. The design and development of applications in smaller businesses, scale-ups, or my own business would be way more tightly knit together. As a result, I often encounter
        people in that type of business looking for this kind of skillset, which is why I tailored it so specifically.
        </p>
      </div>
    </Col>
  </Row>
  <Row>
    <Col className='middle' style={{width:'100%'}}>
    <div className = 'dropText' style={{width:'100%'}}>
      <h3>Competences  </h3>
      <Accordion className='accordion' defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Creativity & Aesthetics
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <Row style={{marginTop:'2%'}}>
                <Col md="auto">
                  <Row style={{marginBottom:'5%'}}>
                  <img alt='' src= {process.env.PUBLIC_URL+'images/identity/competences-01.png'}/>
                  </Row>
                  <Row className='justify-content-center'>
                  <h6>5/8</h6>
                  </Row>
                </Col>
                <Col className='middle'>
                  <p> This expertise area describes the ability to create new ideas and shape them accordingly.
                  Shaping a design is also captured in the expertise of realization, which makes it part of the core skillset I am trying to learn.
                  In my desired industry there is an expected toolset for digital UX that I thus look to learn, most of which I have decided to pick up outtside of this project.
                  This has been one of my weaker competences comparatively, but I still think it is at an okay level because I have a lot of experience ideating for innovation and with digital design software.
                  For the FMP semester, since the ideation was done last semester, I chose to focus on utilizing web frameworks for digital form-giving.
                  I am confident I will be able to master the complete toolset required for digital design and ideation by the time I am entering the professional world. </p>
                </Col>
              </Row>
              <Row style={{paddingTop:'2%', paddingLeft:'3%'}}>
                <Col>
                  <h6>Most important activities</h6>
                  <Row style={{paddingLeft:'1,5%', paddingRight:'4%'}}>
                    <Col>
                      <Row>
                        <Col sm={2}>
                        <p>M2.2 FMP project</p>
                        </Col>
                        <Col>
                        <p>This project taught me web design and aesthetic principles.</p>
                        </Col>
                        <Col md='auto'>
                        <a href='somehwere'>Report</a>
                        </Col>
                      </Row>
                      <Row>
                        <Col sm={2}>
                        <p>M2.1 FMP-prep Project</p>
                        </Col>
                        <Col>
                        <p>This project brought out more of the creativity side, where I tried numerous methods to come up with the perfect idea for my graduation project.</p>
                        </Col>
                        <Col md='auto'>
                        <a href='somehwere'>Report</a> <a href='somehwere'>Reflection</a>
                        </Col>
                      </Row>
                      <Row>
                        <Col sm={2}>
                        <p>M1.1 project</p>
                        </Col>
                        <Col>
                        <p>This project involved a lot of aesthetics of interaction and communication to the user. I learned about communicating on the right level with a target group and gamifying interaction.</p>
                        </Col>
                        <Col md='auto'>
                        <a href='somehwere'>Report</a>
                        </Col>
                      </Row>
                      <Row>
                        <Col sm={2}>
                        <p>B2.2 Aesthetics of interaction</p>
                        </Col>
                        <Col>
                        <p>This course if the introduction to designing usable aesthetics that properly communicate interaction. </p>
                        </Col>
                        <Col md='auto'>
                        <a href='somehwere'>Report</a>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row style={{paddingTop:'1%', paddingLeft:'3%', paddingRight:'4%'}}>
                <Col>
                <h6>Other contributing activities</h6>
                  <Row>
                    <Col>
                    <p>B2.1 project</p>
                    </Col>
                    <Col md='auto'>
                    <a href='somehwere'>Report</a> <a href='somehwere'>Reflection</a>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                    <p>Final Bachelor Project</p>
                    </Col>
                    <Col md='auto'>
                    <a href='somehwere'>Report</a> <a href='somehwere'>Reflection</a>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Technology & Realization
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
          <Card.Body>
            <Row style={{marginTop:'2%'}}>
              <Col md="auto">
                <Row style={{marginBottom:'5%'}}>
                <img alt='' src= {process.env.PUBLIC_URL+'images/identity/competences-02.png'}/>
                </Row>
                <Row className='justify-content-center'>
                <h6>7/8</h6>
                </Row>
              </Col>
              <Col className='middle'>
                <p> As an expertise area, this one combines knowledge from both aesthetics, and in my case computing.
                Although I would say I am generally strong in realizing the type of products that I would like to work on, there are some exceptions when it comes to my
                understanding of hardware systems. Learning more about this could benefit me in the future, so it is something to try and learn.
                Although I have worked with programming a lot, this last year is when I was able to dive deep into the workings of web technologies specifically.
                This semester, with the focus on building a complete web app, has left me feeling confident that my skills are up to date and par with industry standards,
                as I have the skill set required for any starting web developer position. </p>
              </Col>
            </Row>
            <Row style={{paddingTop:'2%', paddingLeft:'3%'}}>
              <Col>
                <h6>Most important activities</h6>
                <Row style={{paddingLeft:'1,5%', paddingRight:'4%'}}>
                  <Col>
                    <Row>
                      <Col sm={2}>
                      <p>M2.2 FMP project</p>
                      </Col>
                      <Col>
                      <p>Here is when I was really able to dive deep into different technologies and learn to develop web applications. At this point I feel really comfortable developing, even if it were my designated role.</p>
                      </Col>
                      <Col md='auto'>
                      <a href='somehwere'>Report</a>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={2}>
                      <p>M2.1 FMP-prep Project</p>
                      </Col>
                      <Col>
                      <p>The MVP for my graduation is when I started learning to code for web technologies. All of my past experience had been object oriented only, so the funtional languages were a completely new perspective.</p>
                      </Col>
                      <Col md='auto'>
                      <a href='somehwere'>Report</a>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={2}>
                      <p>M 1.2 Complex and Adaptive Systems</p>
                      </Col>
                      <Col>
                      <p>I learned to map out a complex algorithmic problem in smaller individual components and bring them all together correctly.</p>
                      </Col>
                      <Col md='auto'>
                      <a href='somehwere'>Report</a>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={2}>
                      <p>M1.1 Project</p>
                      </Col>
                      <Col>
                      <p> For this project I stepped up to learn Unity and coding for game development. It was a ton of fun, but very difficult.
                      I was also the sole person responsible in my group, which must have really helped my growth.</p>
                      </Col>
                      <Col md='auto'>
                      <a href='somehwere'>Report</a>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={2}>
                      <p>B3.2 Final Bachelor Project</p>
                      </Col>
                      <Col>
                      <p>This was the first project where I really needed to step up my development game, building a chatbot.
                      A lot of it was still hardcoded and looking back some of it was a mess. Nonetheless, this was my first real solo technical project, making it a big one</p>
                      </Col>
                      <Col md='auto'>
                      <a href='somehwere'>Report</a>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={2}>
                      <p>Honors academy project</p>
                      </Col>
                      <Col>
                      <p>This is where I really started to code the right way. After some of the initial courses, I was thinking about coding the wrong way.
                      During my honors project, I was working with a computer science student on our application.
                      He taught me the right fundamentals and we were able to practice them immediatly.</p>
                      </Col>
                      <Col md='auto'>
                      <a href='somehwere'>Report</a>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={2}>
                      <p>Froggy Mobile app</p>
                      </Col>
                      <Col>
                      <p>This is to date my main experience with developing for mobile. This was an interesting experience that I believe could prove really helpful in the future.7u</p>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row style={{paddingTop:'1%', paddingLeft:'3%', paddingRight:'4%'}}>
              <Col>
              <h6>Other contributing activities</h6>
                <Row>
                  <Col>
                  <p>Teaching myself coding principles, extracurricular during Internship</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                  <p>Taking a course on Algorithms on Coursera in my free time</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                  <p>Doing projects for my own enjoyment</p>
                  </Col>
                </Row>

              </Col>
            </Row>
          </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="2">
              User & Society
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
          <Card.Body>
            <Row style={{marginTop:'2%'}}>
              <Col md="auto">
                <Row style={{marginBottom:'5%'}}>
                <img alt='' src= {process.env.PUBLIC_URL+'images/identity/competences-05.png'}/>
                </Row>
                <Row className='justify-content-center'>
                <h6>6/8</h6>
                </Row>
              </Col>
              <Col className='middle'>
                <p> This expertise describes the ability to understand consumer or user behavior and
                society as a system. It is also important to be able to validate your ideas using
                appropriate methods to deliver user-centered designs. This is a very important
                supporting skillset for the business expertise, considering your product is only as good as its choice of the user base.
                Although not yet as valued in the industry, it is core to my vision. In this project, I learned to research a niche market
                by harnessing communities and finding the die-hard users to get a better understanding of them. These are also the best users
                to have engaged in marketing or testing procedures. </p>
              </Col>
            </Row>
            <Row style={{paddingTop:'2%', paddingLeft:'3%'}}>
              <Col>
                <h6>Most important activities</h6>
                <Row style={{paddingLeft:'1,5%', paddingRight:'4%'}}>
                  <Col>
                    <Row>
                      <Col sm={2}>
                      <p>M2.2 FMP project</p>
                      </Col>
                      <Col>
                      <p>In this project I learned to interact and utilize user communities as a means of growing a product user base and finding ambassadors.</p>
                      </Col>
                      <Col md='auto'>
                      <a href='somehwere'>Report</a>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={2}>
                      <p>M1.1 Project</p>
                      </Col>
                      <Col>
                      <p>This project taught me how to do user testing in a controlled setting with a difficult target group.</p>
                      </Col>
                      <Col md='auto'>
                      <a href='somehwere'>Report</a>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={2}>
                      <p>M1.1 Activating your Innovation Radar</p>
                      </Col>
                      <Col>
                      <p>In the course Activating your innovation radar I learned how to make trade-offs between user needs and business necessities.</p>
                      </Col>
                      <Col md='auto'>
                      <a href='somehwere'>Report</a>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={2}>
                      <p>B2.1 User-centred Design</p>
                      </Col>
                      <Col>
                      <p>This course introduced me to the core design principles of user centered design.</p>
                      </Col>
                      <Col md='auto'>
                      <a href='somehwere'>Report</a>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row style={{paddingTop:'1%', paddingLeft:'3%', paddingRight:'4%'}}>
              <Col>
              <h6>Other contributing activities</h6>
                <Row>
                  <Col>
                  <p>M1.2 Project 2 Design Research</p>
                  </Col>
                  <Col md='auto'>
                  <a href='somehwere'>Report</a> <a href='somehwere'>Reflection</a>
                  </Col>
                </Row>
                <Row>
                  <Col>
                  <p>B3.2 Tangible and Embodied Interaction</p>
                  </Col>
                  <Col md='auto'>
                  <a href='somehwere'>Report</a> <a href='somehwere'>Reflection</a>
                  </Col>
                </Row>
                <Row>
                  <Col>
                  <p>Honors academy project</p>
                  </Col>
                  <Col md='auto'>
                  <a href='somehwere'>Report</a> <a href='somehwere'>Reflection</a>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="3">
              Business & Entrepreneurship
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="3">
          <Card.Body>
            <Row style={{marginTop:'2%'}}>
              <Col md="auto">
                <Row style={{marginBottom:'5%'}}>
                <img alt='' src= {process.env.PUBLIC_URL+'images/identity/competences-03.png'}/>
                </Row>
                <Row className='justify-content-center'>
                <h6>8/8</h6>
                </Row>
              </Col>
              <Col className='middle'>
                <p> The expertise area of bringing a product to market and building a consumer base for it,
                I would consider my most important competence. I also have a ton of experience in this,
                having worked on innovation competitions, a startup, and now this project.
                I believe I have the right network to get started in this ecosystem. For the project, I wanted to focus
                mainly on how to find consumers and build relations around a new product. I also learned how to start negotiations
                with clients and partners. In doing so I was able to learn a lot about utilizing user or partner communities,
                nicely rounding out this skillset. </p>
              </Col>
            </Row>
            <Row style={{paddingTop:'2%', paddingLeft:'3%'}}>
              <Col>
                <h6>Most important activities</h6>
                <Row style={{paddingLeft:'1,5%', paddingRight:'4%'}}>
                  <Col>
                    <Row>
                      <Col sm={2}>
                      <p>M2.2 FMP project</p>
                      </Col>
                      <Col>
                      <p>In my graduation project I learned what it really means to be an entrepreneur and saw a lot of the hurdles that you have to face.
                      This did make me second guess myself from time to time, but it leaves me very strong in the competency.</p>
                      </Col>
                      <Col md='auto'>
                      <a href='somehwere'>Report</a>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={3}>
                      <p>M1.2 Design Leadership & Entrepreneurship</p>
                      </Col>
                      <Col>
                      <p>This course went very in depth on the different ways of innovating as an intrapreneur or entrepreneur. I learned most of my theoretical fundamentals on the subject here.</p>
                      </Col>
                      <Col md='auto'>
                      <a href='somehwere'>Report</a>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={2}>
                      <p>M1.1 Activating your innovation radar</p>
                      </Col>
                      <Col>
                      <p>In this interesting course we worked with a complicated client group and tried to innovate with them on a strategy and service level rather than a product level.
                      This was something I had not previously done at ID.</p>
                      </Col>
                      <Col md='auto'>
                      <a href='somehwere'>Report</a>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={2}>
                      <p>B3.1 Internship</p>
                      </Col>
                      <Col>
                      <p>During this internship is where I made a ton of connections and is when I really got pushed towards the innovation world. I learned the ins and outs of startups and got to meet a ton of founders.</p>
                      </Col>
                      <Col md='auto'>
                      <a href='somehwere'>Report</a>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row style={{paddingTop:'1%', paddingLeft:'3%', paddingRight:'4%'}}>
              <Col>
              <h6>Other contributing activities</h6>
                <Row>
                  <Col>
                  <p>Honors academy project</p>
                  </Col>
                  <Col md='auto'>
                  <a href='somehwere'>Report</a> <a href='somehwere'>Reflection</a>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="4">
              Math, Data & Computing
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="4">
          <Card.Body>
            <Row style={{marginTop:'2%'}}>
              <Col md="auto">
                <Row style={{marginBottom:'5%'}}>
                <img alt='' src= {process.env.PUBLIC_URL+'images/identity/competences-04.png'}/>
                </Row>
                <Row className='justify-content-center'>
                <h6>7/8</h6>
                </Row>
              </Col>
              <Col className='middle'>
                <p> Although this area has a lot of overlap with the technology aspect of the earlier
                mentioned expertise, that expertise does not cover the ability to work with complex learning systems,
                or the performing of IT operations. Although my understanding of this has grown through me steering my education
                towards learning systems in the master, there is still work to be done before I could implement reliable learning
                systems by myself. When it comes to computing, I took a different route this semester and chose to learn a lot of DevOps.
                This took up a lot of my time and really elevated my knowledge and ability to communicate about computing and system concepts.
                Looking back, this is essential for building reliable web solutions that can harbor for instance learning models.
                Knowledge of how to maintain and deploy apps I consider to be very important and definitely an asset as a designer in
                the digital industry. </p>
              </Col>
            </Row>
            <Row style={{paddingTop:'2%', paddingLeft:'3%'}}>
              <Col>
                <h6>Most important activities</h6>
                <Row style={{paddingLeft:'1,5%', paddingRight:'4%'}}>
                  <Col>
                    <Row>
                      <Col sm={2}>
                      <p>M2.2 FMP project</p>
                      </Col>
                      <Col>
                      <p>In building my graduation project I learned about minimizing computation costs, utilizing and protecting data, and using a machine learning API.</p>
                      </Col>
                      <Col md='auto'>
                      <a href='somehwere'>Report</a>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={2}>
                      <p>M2.1 Designing with Advanced AI</p>
                      </Col>
                      <Col>
                      <p>During designing with advanced AI I did one of my all time favorite projects, that uses a tensorflow backend. I also built an algorithm to process speech, learning how to deal with a special type of data like sound.</p>
                      </Col>
                      <Col md='auto'>
                      <a href='somehwere'>Report</a>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={2}>
                      <p>M1.2 Embodying Intelligent Behavior</p>
                      </Col>
                      <Col>
                      <p>An interesting course that taught me some basics of visualizing machine learning. It also helped me with doing rapid prototyping for such complicated products.</p>
                      </Col>
                      <Col md='auto'>
                      <a href='somehwere'>Report</a>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={2}>
                      <p>B3.2 Final Bachelor Project</p>
                      </Col>
                      <Col>
                      <p>Although not realistically functional, in my FBP I did my first attempt at utilizing machine learning. This is where I learned some of the basic principles of using ML in an app.</p>
                      </Col>
                      <Col md='auto'>
                      <a href='somehwere'>Report</a>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row style={{paddingTop:'1%', paddingLeft:'3%', paddingRight:'4%'}}>
              <Col>
              <h6>Other contributing activities</h6>
                <Row>
                  <Col>
                  <p>B2.2 Making Sense of Sensors</p>
                  </Col>
                  <Col md='auto'>
                  <a href='somehwere'>Report</a> <a href='somehwere'>Reflection</a>
                  </Col>
                </Row>
                <Row>
                  <Col>
                  <p>Doing a coursera course on machine learning.</p>
                  </Col>
                  <Col md='auto'>
                  <a href='somehwere'>Course link</a>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="5">
              Design & Research processes
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="5">
          <Card.Body>
            <Row style={{marginTop:'2%'}}>
              <Col md="auto">
                <Row style={{marginBottom:'5%'}}>
                <img alt='' src= {process.env.PUBLIC_URL+'images/identity/competences-06.png'}/>
                </Row>
                <Row className='justify-content-center'>
                <h6>7/8</h6>
                </Row>
              </Col>
              <Col className='middle'>
                <p> This project combined with its early work in the last semester shows a complete design process managed with a lot of the right tools.
                It also shows that I am able to do proper user analysis, come up with a solution that is wanted by the market,
                and develop it with a user-centered approach. Although I could definitely improve on my knowledge of design frameworks and techniques,
                I think the execution of them is shown to be solid in this project. I would also argue that with every project I have done in the master,
                it has been praised for its design or research processes. For this project specifically, I chose to focus on running a design cycle
                and testing with real potential clients instead of validating with students to grow my experience a little more in the professional field. </p>
              </Col>
            </Row>
            <Row style={{paddingTop:'2%', paddingLeft:'3%'}}>
              <Col>
                <h6>Most important activities</h6>
                <Row style={{paddingLeft:'1,5%', paddingRight:'4%'}}>
                  <Col>
                    <Row>
                      <Col sm={2}>
                      <p>FMP project</p>
                      </Col>
                      <Col>
                      <p>In this project I had to focus on the development and validation side of the product cycle and learned about how to coordinate that process, as well as how to incorporate potential clients into the design cycle.</p>
                      </Col>
                      <Col md='auto'>
                      <a href='somehwere'>Report</a>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={2}>
                      <p>M1.2 project</p>
                      </Col>
                      <Col>
                      <p>This was my first solo research project and in it I learned how to gather meaningful and reproducible results in controlled testing. It also taught me a lot about writing for academia and to this day I am very proud of the results.</p>
                      </Col>
                      <Col md='auto'>
                      <a href='somehwere'>Report</a>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={2}>
                      <p>M1.1 Constructive design research</p>
                      </Col>
                      <Col>
                      <p>This course was actually really meaningful for my research development. It teaches how to setup a research plan and how to write a credible paper, which were both very helpful.</p>
                      </Col>
                      <Col md='auto'>
                      <a href='somehwere'>Report</a>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={2}>
                      <p>FBP project</p>
                      </Col>
                      <Col>
                      <p>My first solo project, running a design cycle by myself.</p>
                      </Col>
                      <Col md='auto'>
                      <a href='somehwere'>Report</a>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={2}>
                      <p>B2.1 project</p>
                      </Col>
                      <Col>
                      <p>This project taught me to work with stakeholders and an involved client.</p>
                      </Col>
                      <Col md='auto'>
                      <a href='somehwere'>Report</a>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row style={{paddingTop:'1%', paddingLeft:'3%', paddingRight:'4%'}}>
              <Col>
              <h6>Other contributing activities</h6>
                <Row>
                  <Col>
                  <p>M1.1 project</p>
                  </Col>
                  <Col md='auto'>
                  <a href='somehwere'>Report</a> <a href='somehwere'>Reflection</a>
                  </Col>
                </Row>
                <Row>
                  <Col>
                  <p>Honors academy</p>
                  </Col>
                  <Col md='auto'>
                  <a href='somehwere'>Report</a> <a href='somehwere'>Reflection</a>
                  </Col>
                </Row>
                <Row>
                  <Col>
                  <p>IGMES</p>
                  </Col>
                  <Col md='auto'>
                  <a href='somehwere'>Report</a> <a href='somehwere'>Reflection</a>
                  </Col>
                </Row>
                <Row>
                  <Col>
                  <p>B3.2 Design Innovation Methods</p>
                  </Col>
                  <Col md='auto'>
                  <a href='somehwere'>Report</a> <a href='somehwere'>Reflection</a>
                  </Col>
                </Row>
                <Row>
                  <Col>
                  <p>B2.2 Design research</p>
                  </Col>
                  <Col md='auto'>
                  <a href='somehwere'>Report</a> <a href='somehwere'>Reflection</a>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="6">
              Teamwork & Communication
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="6">
          <Card.Body>
            <Row style={{marginTop:'2%'}}>
              <Col md="auto">
                <Row style={{marginBottom:'5%'}}>
                <img alt='' src= {process.env.PUBLIC_URL+'images/identity/competences-07.png'}/>
                </Row>
                <Row className='justify-content-center'>
                <h6>7/8</h6>
                </Row>
              </Col>
              <Col className='middle'>
                <p> Overall I think this is a very good competency for me. I dislike using a phrase like ‘work hard, play hard‘,
                but realistically that is what I bring to teams. What has set me apart in leading groups at the Tu/e is that I always
                set expectations at the start of the project. There are never slackers on my team because I make sure everyone is so focused
                on getting results, that it will naturally stand out too much. If you do this, there is still tons of room for a good atmosphere.
                I did the same in this project, although I did not have a team. I set different tools for the management of my communication and
                 processes as I would have when leading a real team. I believe that this helps showcase my ability to do so, but it also kept me on
                 track at all times. Something that I could still work on is being consistent with these efforts and not being easily distracted. </p>
              </Col>
            </Row>
            <Row style={{paddingTop:'2%', paddingLeft:'3%'}}>
              <Col>
                <h6>Most important activities</h6>
                <Row style={{paddingLeft:'1,5%', paddingRight:'4%'}}>
                  <Col>
                    <Row>
                      <Col sm={2}>
                      <p>M2.2 FMP project</p>
                      </Col>
                      <Col>
                      <p>The final graduation project was very shaping of my communication skills, as it required me to go out and initiate communications with all kinds of different stakeholders and users. Getting real users and clients requires a whole different type of communicating that I did not have to do before.</p>
                      </Col>
                      <Col md='auto'>
                      <a href='somehwere'>Report</a>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={2}>
                      <p>M1.1 project</p>
                      </Col>
                      <Col>
                      <p>In this project I worked with three international students from Asia, with little English experience. This made communication very difficult and I had to really step up my game in that respect. It required me to set crystal clear commitments and group rules so that everyone knew what to do. Overall, that really helped me grow as a leader.</p>
                      </Col>
                      <Col md='auto'>
                      <a href='somehwere'>Report</a>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={2}>
                      <p>Honors academy project</p>
                      </Col>
                      <Col>
                      <p>In this project I lead a multi-disciplinary group into a complicated project. This was the first time where I really had to divide work based on strengths and weaknesses of team members with real consequences.</p>
                      </Col>
                      <Col md='auto'>
                      <a href='somehwere'>Report</a>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={2}>
                      <p>IGMES</p>
                      </Col>
                      <Col>
                      <p>Although i had worked at a corporate, this was my first time collaborating with non-engineers who also had little experience in the professional world. This requires a different type of communication especially when working on technical concepts.</p>
                      </Col>
                      <Col md='auto'>
                      <a href='somehwere'>Report</a>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row style={{paddingTop:'1%', paddingLeft:'3%', paddingRight:'4%'}}>
              <Col>
              <h6>Other contributing activities</h6>
                <Row>
                  <Col>
                  <p>B3.1 internship</p>
                  </Col>
                  <Col md='auto'>
                  <a href='somehwere'>Report</a> <a href='somehwere'>Reflection</a>
                  </Col>
                </Row>
                <Row>
                  <Col>
                  <p>B2.2 design research project</p>
                  </Col>
                  <Col md='auto'>
                  <a href='somehwere'>Report</a> <a href='somehwere'>Reflection</a>
                  </Col>
                </Row>
                <Row>
                  <Col>
                  <p>B2.1 engineering design</p>
                  </Col>
                  <Col md='auto'>
                  <a href='somehwere'>Report</a> <a href='somehwere'>Reflection</a>
                  </Col>
                </Row>
                <Row>
                  <Col>
                  <p>B2.1 design project</p>
                  </Col>
                  <Col md='auto'>
                  <a href='somehwere'>Report</a> <a href='somehwere'>Reflection</a>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="7">
              Self directed & Continuous learning
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="7">
          <Card.Body>
            <Row style={{marginTop:'2%'}}>
              <Col md="auto">
                <Row style={{marginBottom:'5%'}}>
                <img alt='' src= {process.env.PUBLIC_URL+'images/identity/competences-08.png'}/>
                </Row>
                <Row className='justify-content-center'>
                <h6>8/8</h6>
                </Row>
              </Col>
              <Col className='middle'>
                <p> It was not until the master that I really became good at self directed learning.
                Although I was always very motivated and learning in my free time, it was pretty sporadic.
                When I started the master however, I started to teach the course ‘professional identity & vision‘ to years 2 and 3 of the bachelor.
                After working the job for a while I have mastered PI&V extensively. After all I have been responsible for shaping the course for the
                last 2 years, so I would consider my understanding of the identity and vision framework, as well as writing the PDP,
                to be exceptional through these circumstances. I also believe this to show in the projects I have done, and will continue to employ the
                PI&V methods as I look to enter the professional world. </p>
              </Col>
            </Row>
            <Row style={{paddingTop:'2%', paddingLeft:'3%'}}>
              <Col>
                <h6>Most important activities</h6>
                <Row style={{paddingLeft:'1,5%', paddingRight:'4%'}}>
                  <Col>
                    <Row>
                      <Col sm={2}>
                      <p>Prof Identity and vision - TA</p>
                      </Col>
                      <Col>
                      <p>For this competency I have a pretty unique role. Being the TA and having been the one to think up the course exercises for the professional identity and vision course for the last two years, has given me a unique expertise in writing PI&V and setting actionable goals.
                      I think this has served me very well and I believe that is shown in the fact that most of my PDP goals are also extracurricular, rather than just part of passing courses.</p>
                      </Col>
                      <Col md='auto'>
                      <a href='somehwere'>Report</a>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={2}>
                      <p>FMP project</p>
                      </Col>
                      <Col>
                      <p>Having to adopt a completely new skillset for this project, I had to find different ways of teaching myself technical concepts at a steady pace. I learned to use industry roadmaps and used hacking platforms to practice my skills on my own time.
                      This is at the core of why I was able to go from zero experience to a fully fledged web application.</p>
                      </Col>
                      <Col md='auto'>
                      <a href='somehwere'>Report</a>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row style={{paddingTop:'1%', paddingLeft:'3%', paddingRight:'4%'}}>
              <Col>
              <h6>Other contributing activities</h6>
                <Row>
                  <Col>
                  <p>B3.1 Professional identity and vision course</p>
                  </Col>
                  <Col md='auto'>
                  <a href='somehwere'>Report</a> <a href='somehwere'>Reflection</a>
                  </Col>
                </Row>
                <Row>
                  <Col>
                  <p>Building my own goal planning system and roadmap for all life skills</p>
                  </Col>
                  <Col md='auto'>
                  <a href='somehwere'>Report</a> <a href='somehwere'>Reflection</a>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
    </Col>
  </Row>
  <h3 style={{paddingTop:'5vh'}}>Awards</h3>
  <p>In 2019 I was selected by TheNextWeb for the T500, meaning i was one of the top 500 talents in the digital industry under the age of 26.</p>
  <img alt='' src= {process.env.PUBLIC_URL+'/images/other/0.png'}/>
  </div>,

  /*number 9*/

  <div className= 'divBase'>
    <Row>
      <Col className='middle'>
        <div className = 'dropText'>
          <h3>Go2Home</h3>
          <h6>Gamified spinal cord injury rehabilitation using motion recognition</h6>
          <p> The Go2Home project was part of the Honors Academy program that I was selected for in the last two years of my bachelor.
          The Honors Academy is reserved for students who show potential in the academic setting and is an opportunity for further development through unique projects.
          As such a unique opportunity, we got to work with G-therapeutics, an organization geared towards creating motor recovery after spinal cord injuries.
          To aid their rehabilitation program we built a tool for patients to rehabilitate at home using motion recognition.
          By hacking a Microsoft Kinect we were able to build a game that patients could perform at home which could deliver personal feedback on form and execution for different exercises.
          In this project I was really made aware of the difficulties of designign within healthcare regulations. I worked for a long time in this multi-disciplined team and most of all I think it made me a stronger professional and leader.
          It really showed me what it means to be the designer on such a team and how to uphold the design principles and process.
          </p>
        </div>
      </Col>
      <Col className='middle'>
        <img alt='' src= {process.env.PUBLIC_URL+'images/other/gtx.jpeg'}/>
      </Col>
    </Row>
    <Row>
      <div className = 'buttonRow mx-auto'>
        <Button href={reportLinks[11]} style={{margin:'2vh'}} variant="outline-secondary" size="lg">Read report (non-disclosure)</Button>
        <Button href={reportLinks[12]} style={{margin:'2vh'}} variant="outline-secondary" size="lg">Read reflection (non-disclosure)</Button>
      </div>
    </Row>
  </div>,

  /*number 10*/

  <div className= 'divBase'>
    <Row>
      <Col className='middle'>
        <img alt='' src= {process.env.PUBLIC_URL+'images/other/userTest.JPG'}/>
      </Col>
      <Col className='middle'>
        <div className = 'dropText'>
          <h3>Mathbuilder</h3>
          <h6>An Augmented Reality game for elementary school classes.</h6>
          <p>In my first master project during late 2018, I built an augmented reality game using the Unity editor.
          This game was meant as a cooperative challenge for students to make elementary education more exciting and engaging.
          In Mathbuilder, students work on exercises for the relevant course, earning them materials as a group.
          These materials can then be spent on decoration or building for an augmented city that sits on their group desks.
          After completion, the game was extensively tested at elementary schools in the south of the Netherlands.
          Students love playing around with the tangible pieces and doing the gamified exercises. The concept was so popular
          that I went to pitch it at StudyFlow to inspire their ideas for education reform.
          It was also the subject of an academic research paper presented at CHIplay 2019.
          While learning about development, this project taught me mostly about a different approach to the design process; one that is pushed by technology.
          It also gave me a lot of experience with testing in a controlled user setting.
          </p>
        </div>
      </Col>
    </Row>
    <Row>
      <div className = 'buttonRow mx-auto'>
        <Button href={reportLinks[15]} style={{margin:'2vh'}} variant="outline-secondary" size="lg">Read reflection</Button>
        <Button href={reportLinks[14]} style={{margin:'2vh'}} variant="outline-secondary" size="lg">Read report</Button>
        <Button href={reportLinks[13]} style={{margin:'2vh'}} variant="outline-secondary" size="lg">Check out the video</Button>
      </div>
    </Row>
  </div>,

  /*number 11*/

  <div className= 'divBase'>
    <Row>
      <Col className='middle'>
        <div className = 'dropText'>
          <h3>SmartTap</h3>
          <h6>A sensing tool for visually impaired swimmers</h6>
          <p> In this project collaboration with Libra, I worked with the Dutch paralympic swim team on one of their sport's core issues.
          The visually impaired swim team are fast and technically proficient, but they lose time when they have to turn in the pool, simply because they are unable to see it.
          Registration of the end of the pool happens through someone tapping them on the head with a long stick, which is inpractical and outdated.
          This is why we built SmartTap, an auditory guidance system built straight into the swimming cap.
          The system notifies swimmers using bone conducted vibrations when they are a set distance from hitting the edge of the pool.
          This project was later proposed for production by the team at Libra. This was my first project collaborating with a client and in general it taught me a lot about how to run a good design process. This was the first design I was really proud of.
          </p>
        </div>
      </Col>
      <Col className='middle'>
        <img alt='' src= {process.env.PUBLIC_URL+'images/other/swimtool.jpeg'}/>
      </Col>
    </Row>
    <Row>
      <div className = 'buttonRow mx-auto'>
        <Button href={reportLinks[17]} style={{margin:'2vh'}} variant="outline-secondary" size="lg">Read reflection</Button>
        <Button href={reportLinks[16]} style={{margin:'2vh'}} variant="outline-secondary" size="lg">Read report</Button>
      </div>
    </Row>
  </div>,

  /*number 12*/

  <div className= 'divBase'>
    <Row>
      <Col className='middle'>
        <img alt='' src= {process.env.PUBLIC_URL+'images/other/winner.jpeg'}/>
      </Col>
      <Col className='middle'>
        <div className = 'dropText'>
          <h3>IGMES</h3>
          <h6>Disrupting speech therapy through digitalization</h6>
          <p>In early 2018, I worked on a business called 'IGMES' which is a dutch abbreviation for 'speaking with a speech inpedement'.
          With a motivated team that included a ton of experience in the speech therapy industry,
          we set out to provide patients with an improved methodology for recovering speaking ability.
          After I pitched this business in front of a jury the concept landed us the price of best human centered design at the Dutch Hacking Health competition.
          From starting this business I learned a ton about working with people outside of the Tu/e. Whether we like to admit it or not, always working with engineers does change the way you approach projects.
          It takes getting used to to work with people outside of that bubble, which really grew my communication skills. Outside of that, it was my first attempt at setting up a serious business and bringing a product to market.
            </p>
        </div>
      </Col>
    </Row>
    <Row>
      <div className = 'buttonRow mx-auto'>
      </div>
    </Row>
  </div>,

  /*number 13*/

  <div className= 'divBase'>
    <Row>
      <Col className='middle'>
        <div className = 'dropText'>
          <h3>Blue tulip awards</h3>
          <h6>Scouting the best consumer experience startups of the Netherlands</h6>
          <p>When I was 19 I took up for my first real workplace experience at a large corporation.
          During this time I worked for Accenture on what is now the Blue Tulip Awards.
          In organizing the event, I was responsible for scouting the startups with the best consumer experience innovations.
          I then pitched to and deliberated with the industry leaders of the Netherlands that made up the jury to find the single best one.
          Not only did I learn to work in a professional environment, but it gave me huge insight into what makes for a startup succesful.
          In working with them, I was even able to learn from the top Benelux CEO's and company heads of companies like Google, Wolters Kluwer, Tesla, Hema and TheNextWeb.
          </p>
        </div>
      </Col>
      <Col className='middle'>
        <img alt='' src= {process.env.PUBLIC_URL+'images/other/topmeeting.jpeg'}/>
      </Col>
    </Row>
    <Row>
      <div className = 'buttonRow mx-auto'>
        <Button href={reportLinks[18]} style={{margin:'2vh'}} variant="outline-secondary" size="lg">Read report + reflection</Button>
      </div>
    </Row>
  </div>,


  /*number 14*/

  <div className= 'divBase'>
    <Row>
      <Col className='middle'>
        <img alt='' src= {process.env.PUBLIC_URL+'images/other/resultsOverall.png'}/>
      </Col>
      <Col className='middle'>
        <div className = 'dropText'>
          <h3>Moneble</h3>
          <h6>Building an AI based SaaS startup</h6>
          <p>Moneble is the first business I have started where I did everything myself.
          From the idea to its development, design, marketing, finances and in the end sales.
          In the process of building this business and its user base, I learned how to harness the power of user communities.
          It also taught me how to handle every aspect of a product road to market, giving me a very good amount of
          experience when it comes to knowing what goes into running a startup. </p>
        </div>
      </Col>
    </Row>
    <Row>
      <div className = 'buttonRow mx-auto'>
        <Button href={reportLinks[8]} style={{margin:'2vh'}} variant="outline-secondary" size="lg">Read report</Button>
        <Button href={reportLinks[7]} style={{margin:'2vh'}} variant="outline-secondary" size="lg">Check out the video</Button>
      </div>
    </Row>
  </div>
]

export default divs;
