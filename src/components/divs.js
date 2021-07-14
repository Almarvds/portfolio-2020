import React from 'react';
import { Row, Col, Button, Card, Nav, Accordion } from 'react-bootstrap';
import reportLinks from './reportLinks.js'

const divs= [

  /*number 1*/

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
          <p>To build Moneble, I learned to build a full stack architecture in the cloud.
          This project taught me how to work with a number of technologies, but most of all taught me how web technologies work as a whole.
          I believe that this really sets me apart as a designer, as it allows me to prototype unique solutions.
          Aside from being a better developer and helping me prototype more intricate products,
          it also gives me a UX advantage with me having a better idea of what is possible and works well on the development side.
          </p>
        </div>
      </Col>
    </Row>
    <Row>
      <div className = 'buttonRow mx-auto'>
      <Button href={reportLinks[7]} style={{margin:'2vh'}} variant="outline-secondary" size="lg">Check out the video</Button>
      </div>
    </Row>
  </div>,

  /*number 2*/

  <div className= 'divBase'>
    <Row>
      <Col className='middle'>
        <div className = 'dropText'>
          <h3>DD&H Digital Communication</h3>
          <h6>UX Designer and front-end developer</h6>
          <p>In 2020, I started a position as a UX designer and front-end developer at DD&H, an Amsterdam based IT solutions provider.
          Through this time our focus was on building tools for the digitalization of different business processes. DD&H does this for a number of large clients in the European ecosystem.
          As the UX designer I was responsible for mapping and designing the customer journey. This means finding the pain points in the digital processes of a business.
          After delivering the design, I worked on the implementation of the front-end stack with the rest of the development team.
          </p>
        </div>
      </Col>
      <Col className='middle'>
        <img alt='' src= {process.env.PUBLIC_URL+'images/other/ddnh.jpg'} style={{backgroundColor:'white', padding:'2%'}}/>
      </Col>
    </Row>
  </div>,

  /*number 3*/

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
          This project showcases and makes up my experience in developing and designing for mobile.
          </p>
        </div>
      </Col>
    </Row>
  </div>,

  /*number 4*/

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
        <Button href={reportLinks[0]} style={{margin:'2vh'}} variant="outline-secondary" size="lg">Check out the video</Button>
      </div>
    </Row>
  </div>,

  /*number 5*/

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
  </div>,

  /*number 6*/

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
        <Button href={reportLinks[4]} style={{margin:'2vh'}} variant="outline-secondary" size="lg">Check out the video</Button>
      </div>
    </Row>
  </div>,

  /*number 7*/

  <div className= 'divBase'>
    <Row>
      <Col className='middle'>
        <div className = 'dropText'>
          <Row>
            <Col>
              <h3>About me  </h3>
            </Col>
            <Col className= 'col-auto ml-auto'>
              <Row>
                <Col>
                  <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/almarvanderstappen/">
                    <img id='socialLinks' alt='' src= {process.env.PUBLIC_URL+'linkedin.svg'}/>
                  </a>
                </Col>
                <Col>
                  <a target="_blank" rel="noopener noreferrer" href="https://github.com/Almarvds">
                    <img id='socialLinks' alt='' src= {process.env.PUBLIC_URL+'github-image.svg'}/>
                  </a>
                </Col>
                <Col>
                  <a target="_blank" rel="noopener noreferrer" href="mailto:almarvanderstappen@gmail.com">
                    <img id='socialLinks' alt='' src= {process.env.PUBLIC_URL+'mail.svg'}/>
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>
          <h6>I am a designer and developer of intelligent products, with a love for combining AI and design</h6>
          <p>Hello! My name is Almar van der Stappen. You might know me from moneble.co or one of the other projects on this page.
          I am very passionate about the crossroads of AI & Design and have pursued that interest both in business and academia. With that, I have
          grown into a digital designer and developer focused on innovation road to market and high fidelity prototyping. Most of my experience with this comes from working in and around startups.
          As a designer I bring a unique angle being able to design and prototype full-stack solutions, learning systems and tons of other stuff from scratch, while maintaining a user-centered perspective.
          In the latest steps of my career, I have been mainly concerned with artificial chat and voice, which I absolutely love!
          If you are interested in getting in touch and discussing any of these topics, don't hesitate to contact me through my socials or simply shoot me an email.
          </p>
          <h6>Education</h6>
            <ul>
          <li><b>MSc. Industrial Design</b> Eindhoven University of technology</li>
          <li><b>Honors degree</b> Eindhoven University of technology</li>
          <li><b>BSc. Industrial Design</b> Eindhoven University of technology</li>
            </ul>
          <h6>Awards</h6>
            <ul>
          <li><b>TNW T500</b> | Top 500 digital talents under 26 in the Netherlands 2019-2020</li>
            </ul>
          <h6>Publications</h6>
          <ul>
          <li><b>Towards Guidelines for Designing Human-in-the-Loop Machine Training Interfaces</b> | van der Stappen, A., Funk, M. (2021, April) IUI '21: 26th International Conference on Intelligent User InterfacesApril 2021 Pages 514–519</li>
          <li><b>MathBuilder: A collaborative AR math game for elementary school students</b> | van der Stappen, A., Liu, Y., Xu, J., Yu, X., Li, J., & Van Der Spek, E. D. (2019, October).
          MathBuilder: A collaborative AR math game for elementary school students. In Extended Abstracts of the Annual Symposium on Computer-Human Interaction in Play Companion Extended Abstracts (pp. 731-738).</li>
          </ul>
          <h6 style={{marginTop:'5vh'}}>I love working with these: </h6>
          <Row style={{marginLeft:'4vw'}}>
          <div className='iconContainer'>
            <img className='iconFade' alt='' src= {process.env.PUBLIC_URL+'icons/illustrator.jpg'} style={{animationDelay:'0.3s'}}/>
          </div>
          <div className='iconContainer'>
            <img className='iconFade' alt='' src= {process.env.PUBLIC_URL+'icons/photoshop.png'}  style={{animationDelay:'0.4s'}}/>
          </div>
          <div className='iconContainer'>
            <img className='iconFade' alt='' src= {process.env.PUBLIC_URL+'icons/indesign.png'}  style={{animationDelay:'0.5s'}}/>
          </div>
          <div className='iconContainer'>
            <img className='iconFade' alt='' src= {process.env.PUBLIC_URL+'icons/html.png'} style={{animationDelay:'0.6s'}}/>
          </div>
          <div className='iconContainer'>
            <img className='iconFade' alt='' src= {process.env.PUBLIC_URL+'icons/css.png'}  style={{animationDelay:'0.7s'}}/>
          </div>
          <div className='iconContainer'>
            <img className='iconFade' alt='' src= {process.env.PUBLIC_URL+'icons/js.png'}  style={{animationDelay:'0.8s'}}/>
          </div>
          <div className='iconContainer'>
            <img className='iconFade' alt='' src= {process.env.PUBLIC_URL+'icons/react.png'} style={{animationDelay:'0.9s'}}/>
          </div>
          <div className='iconContainer'>
            <img className='iconFade' alt='' src= {process.env.PUBLIC_URL+'icons/node.png'}  style={{animationDelay:'1.0s'}}/>
          </div>
          <div className='iconContainer'>
            <img className='iconFade' alt='' src= {process.env.PUBLIC_URL+'icons/unity.png'}  style={{animationDelay:'1.1s'}}/>
          </div>
          <div className='iconContainer'>
            <img className='iconFade' alt='' src= {process.env.PUBLIC_URL+'icons/Atlassian-Logo.png'}  style={{animationDelay:'1.8s'}}/>
          </div>
          </Row>
          <Row style={{marginLeft:'4vw'}}>
          <div className='iconContainer'>
            <img className='iconFade' alt='' src= {process.env.PUBLIC_URL+'icons/flutter.png'}  style={{animationDelay:'1.2s'}}/>
          </div>
          <div className='iconContainer'>
            <img className='iconFade' alt='' src= {process.env.PUBLIC_URL+'icons/git.png'}  style={{animationDelay:'1.3s'}}/>
          </div>
          <div className='iconContainer'>
            <img className='iconFade' alt='' src= {process.env.PUBLIC_URL+'icons/figma.png'}  style={{animationDelay:'1.4s'}}/>
          </div>
          <div className='iconContainer'>
            <img className='iconFade' alt='' src= {process.env.PUBLIC_URL+'icons/typescript.png'}  style={{animationDelay:'1.5s'}}/>
          </div>
          <div className='iconContainer'>
            <img className='iconFade' alt='' src= {process.env.PUBLIC_URL+'icons/tensorflow.png'}  style={{animationDelay:'1.6s'}}/>
          </div>
          <div className='iconContainer'>
            <img className='iconFade' alt='processing' src= {process.env.PUBLIC_URL+'icons/processing.png'}  style={{animationDelay:'1.7s'}}/>
          </div>
          <div className='iconContainer'>
            <img className='iconFade' alt='' src= {process.env.PUBLIC_URL+'icons/notion.png'}  style={{animationDelay:'1.8s'}}/>
          </div>
          <div className='iconContainer'>
            <img className='iconFade' alt='' src= {process.env.PUBLIC_URL+'icons/DialogFlow.png'}  style={{animationDelay:'1.8s'}}/>
          </div>
          <div className='iconContainer'>
            <img className='iconFade' alt='' src= {process.env.PUBLIC_URL+'icons/Chatleyer.png'}  style={{animationDelay:'1.8s'}}/>
          </div>
          <div className='iconContainer'>
            <img className='iconFade' alt='' src= {process.env.PUBLIC_URL+'icons/LucidChart.png'}  style={{animationDelay:'1.8s'}}/>
          </div>
          <div className='iconContainer'>
            <img className='iconFade' alt='' src= {process.env.PUBLIC_URL+'icons/botsociety.png'}  style={{animationDelay:'1.8s'}}/>
          </div>
          </Row>
        </div>
      </Col>
    </Row>
  </div>,

  /*number 8*/

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
          I worked for close to two years in this multi-disciplinary team and most of all I think it made me a stronger leader.
          </p>
        </div>
      </Col>
      <Col className='middle'>
        <img alt='' src= {process.env.PUBLIC_URL+'images/other/gtx.jpeg'}/>
      </Col>
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
          </p>
        </div>
      </Col>
    </Row>
    <Row>
      <div className = 'buttonRow mx-auto'>
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
          The visually impaired swim team are fast and technically proficient, but they lose time when they have to turn in the pool, simply because they are unable to see the edge of it.
          Registration of the end of the pool happens through someone tapping them on the head with a long stick, which is inpractical and outdated.
          This is why we built SmartTap, an auditory guidance system built straight into the swimming cap.
          The system notifies swimmers using bone conducted vibrations when they are a set distance from hitting the edge of the pool.
          This project was later proposed for production by the team at Libra.
          </p>
        </div>
      </Col>
      <Col className='middle'>
        <img alt='' src= {process.env.PUBLIC_URL+'images/other/swimtool.jpeg'}/>
      </Col>
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
          From starting this business I learned a ton about working with people outside of engineering. Whether we like to admit it or not, always working with engineers does change the way you approach projects.
          It takes getting used to to work with people outside of that bubble, which really grew my communication skills. Outside of that, it was my first attempt at setting up a serious business and bringing a product to market.
            </p>
        </div>
      </Col>
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
          During this time I worked for Accenture on what is now called the Blue Tulip Awards.
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
          It also taught me how to handle every aspect of a product road to market, giving me a good amount of
          experience when it comes to everything that goes into running a startup. </p>
        </div>
      </Col>
    </Row>
    <Row>
      <div className = 'buttonRow mx-auto'>
        <Button href={reportLinks[7]} style={{margin:'2vh'}} variant="outline-secondary" size="lg">Check out the video</Button>
      </div>
    </Row>
  </div>
]

export default divs;
