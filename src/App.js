import logo from './logo.svg';
import showcase from './showcase.svg'
import fundamental from './fundamentals.svg'
import react from './react.svg'
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-4 fixed-top">
        <div className="container">
          <a href="#" className="navbar-brand">FrontEnd Bootcamp </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
            <span class='navbar-toggler-icon'></span>
          </button>
          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#learn">What you will learn</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#questions">Questions</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Instructors">Instructors</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* // <-----Section-------> */}
      <section className="bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start">
        <div className="container">
          <div className="d-sm-flex align-items-center  justify-center-between">
            <div>
              <h1>Hire a <span className="text-warning"> Web Developer</span></h1>
              <p className='lead my-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla provident placeat et, consequuntur ratione,
                non repellendus magnam minus possimus sit nostrum officia atque eius minima?
                Nesciunt cupiditate dolores earum expedita.</p>
              <button className="btn btn-primary btn-lg">Hire Me</button>
            </div>
            <img className="img-fluid w-50 d-none d-sm-block" src={showcase} alt="" />
          </div>
        </div>
      </section>
      {/* Newslette Section */}
      <section className="bg-primary text-light  p-5">
        <div className="container">
          <div className="d-md-flex justify-content-between align-items-center">
            <h3 className="mb-4 md-md-0"> Sign Up for ouw Newsletter</h3>
            <div class="input-group mb-3">
              <input type="text" class="form-control news-input w-50" placeholder="Enter Email" />
              <button class="btn btn-dark btn-lg" type="button">Click Here..</button>
            </div>
          </div>
        </div>
      </section>
      {/* // Boxes Cards using Grid */}
      <section className="p-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md">
              <div className="card bg-dark text-light align-items-center  justify-center-between">
                <div className="h1 m-4">
                  <i class="bi bi-laptop"></i>

                </div>
                <h3 className='card-title'>
                  Virtual
                </h3>
                <p className="card-text text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia pariatur
                  quae placeat impedit non, commodi dolorum ea atque, incidunt quasi modi
                  odit aperiam ex quo consequatur recusandae?
                  Quos?
                </p>
                <a href="hash" className="btn btn-primary mb-4">Read More</a>
              </div>
            </div>
            <div className="col-md"> <div className="card bg-secondary text-light align-items-center  justify-center-between">
              <div className="h1 m-4">
                <i class="bi bi-person-square"></i>

              </div>
              <h3 className='card-title'>
                Hybrid
              </h3>
              <p className="card-text text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia pariatur
                quae placeat impedit non, commodi dolorum ea atque, incidunt quasi modi
                odit aperiam ex quo consequatur recusandae?
                Quos?
              </p>
              <a href="hash" className="btn btn-primary mb-4">Read More</a>
            </div></div>
            <div className="col-md"> <div className="card bg-dark text-light align-items-center  justify-center-between">
              <div className="h1 m-4">
                <i class="bi bi-people"></i>

              </div>
              <h3 className='card-title'>
                In Person
              </h3>
              <p className="card-text text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia pariatur
                quae placeat impedit non, commodi dolorum ea atque, incidunt quasi modi
                odit aperiam ex quo consequatur recusandae?
                Quos?
              </p>
              <a href="hash" className="btn btn-primary mb-4">Read More</a>
            </div></div>
          </div>
        </div>
      </section>
      {/* Learning Section */}
      <section className="p-5" id="learn">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md">
              <img src={fundamental} className="img-fluid" alt="" />
            </div>
            <div className="col-md">
              <h2>Learn the Fundamental </h2>
              <p className="lead">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati?</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse totam
                vero sint repellat sit minus commodi nemo illo magni quidem, voluptatibus
                veritatis, corporis est, rem veniam. Laborum optio possimus aperiam
                maxime consequatur ipsa,
                in ratione repudiandae! Architecto eos quisquam quaerat!</p>
              <a href="hash" className="btn btn-light mt-4"><i className="bi bi-chevron-right"></i> Read More</a>
            </div>
          </div>
        </div>
      </section>
      {/* react section */}
      <section className="bg-dark p-5 text-light" id="learn">
        <div className="container">
          <div className="row align-items-center justify-content-between">

            <div className="col-md">
              <h2>Learn React </h2>
              <p className="lead">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati?</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse totam
                vero sint repellat sit minus commodi nemo illo magni quidem, voluptatibus
                veritatis, corporis est, rem veniam. Laborum optio possimus aperiam
                maxime consequatur ipsa,
                in ratione repudiandae! Architecto eos quisquam quaerat!</p>
              <a href="hash" className="btn btn-light mt-4"><i className="bi bi-chevron-right"></i> Read More</a>
            </div>
            <div className="col-md">
              <img src={react} className="img-fluid" alt="" />
            </div>
          </div>

        </div>
      </section>

      {/* question section */}
      <div className="section p-5" id="questions"></div>
      <div className="container">
        <h2 className='text-center'> Frequently Ask Question</h2>
        <div class="accordion accordion-flush" id="questions">
          {/* item   */}
          <div class="accordion-item">
            <h2 class="accordion-header" >
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#questionOne" >
                Where are you located?
              </button>
            </h2>
            <div id="questionOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#questions">
              <div class="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore asperiores iste perspiciatis ea eveniet maiores totam delectus non, expedita dolores, magni nostrum laudantium. Nam ipsum obcaecati atque, quas exercitationem consequatur in blanditiis non unde, sit a amet eos debitis vel.</div>
            </div>
          </div>
          {/* item   */}
          <div class="accordion-item">
            <h2 class="accordion-header" >
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#questionTwo" >
                What are the charges of indivitual modules?
              </button>
            </h2>
            <div id="questionTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#questions">
              <div class="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore asperiores iste perspiciatis ea eveniet maiores totam delectus non, expedita dolores, magni nostrum laudantium. Nam ipsum obcaecati atque, quas exercitationem consequatur in blanditiis non unde, sit a amet eos debitis vel.</div>
            </div>
          </div>
          {/* item   */}

          <div class="accordion-item">
            <h2 class="accordion-header" >
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#questionThree" >
                When are the learning methods?
              </button>
            </h2>
            <div id="questionThree" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#questions">
              <div class="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore asperiores iste perspiciatis ea eveniet maiores totam delectus non, expedita dolores, magni nostrum laudantium. Nam ipsum obcaecati atque, quas exercitationem consequatur in blanditiis non unde, sit a amet eos debitis vel.</div>
            </div>
          </div>
                  {/* item   */}

                  <div class="accordion-item">
            <h2 class="accordion-header" >
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#questionFour" >
                How do i sign up?
              </button>
            </h2>
            <div id="questionFour" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#questions">
              <div class="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore asperiores iste perspiciatis ea eveniet maiores totam delectus non, expedita dolores, magni nostrum laudantium. Nam ipsum obcaecati atque, quas exercitationem consequatur in blanditiis non unde, sit a amet eos debitis vel.</div>
            </div>
          </div>
                       {/* item   */}

                       <div class="accordion-item">
            <h2 class="accordion-header" >
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#questionFive" >
                Is internship included in the course?
              </button>
            </h2>
            <div id="questionFive" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#questions">
              <div class="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore asperiores iste perspiciatis ea eveniet maiores totam delectus non, expedita dolores, magni nostrum laudantium. Nam ipsum obcaecati atque, quas exercitationem consequatur in blanditiis non unde, sit a amet eos debitis vel.</div>
            </div>
          </div>
        </div>
      </div>
{/* instructor */}
      <section className="p-5 bg-primary" id="instructors">
        <div className="container">
          <h2 className='text-center text-white'>Instructors</h2>
          <p className="lead text-center text-white md-5">Our Instructors all have 6+ experince 
          as  a web developers.</p>
          <div className="row g-5">
            <div className="col-md-6 col-lg-3">
              <div className="card bg-light">
                <div className="card-body text-center">
                  <img src="https://randomuser.me/api/portraits/women/63.jpg" className="rounded-circle mb-4"alt="" />
                  <h3 className='card-title mb-4'>Kaite</h3>
                   <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi.
                   ipsum dolor sit amet consectetur adipisicing elit. </p>
                   <a href='hash'><i className="bi bi-twitter text-dark mx-1"></i></a>
                   <a href='hash'><i className="bi bi-facebook text-dark mx-1"></i></a>
                   <a href='hash'><i className="bi bi-linkedin text-dark mx-1"></i></a>
                   <a href='hash'><i className="bi bi-instagram text-dark mx-1"></i></a>


                </div>
              </div>
            </div>
            {/* nd person */}
            <div className="col-md-6 col-lg-3">
              <div className="card bg-light">
                <div className="card-body text-center">
                  <img src="https://randomuser.me/api/portraits/women/8.jpg" className="rounded-circle mb-4"alt="" />
                  <h3 className='card-title mb-4'>Maria</h3>
                   <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi.
                   ipsum dolor sit amet consectetur adipisicing elit. </p>
                   <a href='hash'><i className="bi bi-twitter text-dark mx-1"></i></a>
                   <a href='hash'><i className="bi bi-facebook text-dark mx-1"></i></a>
                   <a href='hash'><i className="bi bi-linkedin text-dark mx-1"></i></a>
                   <a href='hash'><i className="bi bi-instagram text-dark mx-1"></i></a>


                </div>
              </div>
            </div>
            {/* thrid person */}
            <div className="col-md-6 col-lg-3">
              <div className="card bg-light">
                <div className="card-body text-center">
                  <img src="https://randomuser.me/api/portraits/men/63.jpg" className="rounded-circle mb-4"alt="" />
                  <h3 className='card-title mb-4'>Jhon Doe</h3>
                   <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi.
                   ipsum dolor sit amet consectetur adipisicing elit. </p>
                   <a href='hash'><i className="bi bi-twitter text-dark mx-1"></i></a>
                   <a href='hash'><i className="bi bi-facebook text-dark mx-1"></i></a>
                   <a href='hash'><i className="bi bi-linkedin text-dark mx-1"></i></a>
                   <a href='hash'><i className="bi bi-instagram text-dark mx-1"></i></a>


                </div>
              </div>
            </div>
            {/* 4 person */}
            <div className="col-md-6 col-lg-3">
              <div className="card bg-light">
                <div className="card-body text-center">
                  <img src="https://randomuser.me/api/portraits/men/44.jpg" className="rounded-circle mb-4"alt="" />
                  <h3 className='card-title mb-4'>Mark Mil</h3>
                   <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi.
                   ipsum dolor sit amet consectetur adipisicing elit. </p>
                   <a href='hash'><i className="bi bi-twitter text-dark mx-1"></i></a>
                   <a href='hash'><i className="bi bi-facebook text-dark mx-1"></i></a>
                   <a href='hash'><i className="bi bi-linkedin text-dark mx-1"></i></a>
                   <a href='hash'><i className="bi bi-instagram text-dark mx-1"></i></a>


                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>

  );
}

export default App;
