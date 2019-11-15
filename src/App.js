import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <section id="navbar">
      <nav class="navbar navbar-expand-lg navbar-light">
  <a class="navbar-brand" href="#"><img src="/go.PNG"/></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <a class="nav-link" href="#">HOME</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">SERVICES</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">ABOUT US</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" >TESTIMONIALS</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">CONTACT</a>
      </li>
    </ul>
  </div>
</nav>
      </section>
     
      <section id="banner">
        <div className="container text-md-left ">
          <div className="row">
            <div className="col-md-6">
              <p className="promo-title animated fadeInDown delay-2s">BEST IT COMPANY</p>
              <p className="animated fadeInDown delay-2s">We offer a wide range of logistic services, which spans a wide range of networks
            across International Borders providing our clients with trustworthy and cost.</p>
            <button type="button" class="btn btn-light">GET STARTED</button>
              <a href="#"><img src="/play.JPG" className="play-btn animated fadeInDown delay-1s"/>Watch Video</a>
            </div>
            <div className="col-md-6 text-center myclass">
            <img src="/aman1.PNG" class="img1 animated fadeInDown delay-3s"/>
            </div>
          </div>
          </div>
        <img src="/wave3.PNG" class="bottom-img animated"/>
      </section>

      <section id="services">
        <div className="container text-center">
          <h1 className="title">OUR SERVICES</h1>
          <div className="row text-center">
            <div className="col-md-4 services">
              <a href="#"><img src="/growth2.JPG" className="service-img" /></a>
              <h4>Growth Marketing</h4>
              <p>We offer a wide range of logistic services, which spans a wide range of networks
            across International Borders providing our clients</p>
            </div>
            <div className="col-md-4 services">
             <a href="#"> <img src="/online3.JPG" className="service-img" /></a>
              <h4>Online Branding</h4>
              <p>We offer a wide range of logistic services, which spans a wide range of networks
            across International Borders providing our clients</p>
            </div>
            <div className="col-md-4 services">
             <a href="#"> <img src="/growth2.JPG" className="service-img" /></a>
              <h4>Animated ads</h4>
              <p>We offer a wide range of logistic services, which spans a wide range of networks
            across International Borders providing our clients</p>
            </div>
          </div>
        </div>
      </section>
      
      <section id="about-us">
        <div className="container">
          <h1 className="title text-center">WHY CHOOSE US?</h1>
          <div className="row">
            <div className="col-md-6 about-us">
              <p className="about-title text-md-left">Why we're different</p>
              <ul className="text-md-left">
                <li>Understand our client's buisness foal first</li>
                <li>Believe in doing buisness with honesty</li>
                <li>We deliver on time</li>
                <li>We create a winning content strategy</li>
                <li>We protect your online reputation</li>
                <li>We create a winning content strategy</li>
                <li>We protect your online reputation</li>
              </ul>
            </div>
            <div className="col-md-6">
              <img src="/network2.PNG" className="img-fluid"/>
            </div>
          </div>
        </div>
      </section>
      <section id="testimonials">
        <div className="container">
          <h1 className="title text-center">CLIENT'S FEEDBACK</h1>
          <div className="row">
            <div className="col-md-4 testimonials">
              <p className="text-md-left">This theme is very good and saves lot of good time.Good customer support too.</p>
              <img src="/user4.PNG" className="img2"/>
                <p className="text-md-left"><b>Mr.Scoob</b><br></br> Co-founder at XYZ</p>
                
            </div>
            <div className="col-md-4 testimonials">
              <p className="text-md-left">This theme is very good and saves lot of good time.Good customer support too.</p>
              <img src="/user7.PNG" className="img2"/>
                <p className="text-md-left"><b>Mr.Bhatt</b><br></br> Director at XYZ</p>
                
            </div>
            <div className="col-md-4  testimonials">
              <p className="text-md-left">This theme is very good and saves lot of good time.Good customer support too.</p>
              <img src="/user4.PNG" className="img2"/>
                <p className="text-md-left"><b>Mr.Frek</b><br></br> Employee at XYZ</p>
                
            </div>
          </div>
        </div>
      </section>
     
      <div className="container">
        
<h1 className="title text-center">CONTACT US</h1>
        <p className="aa">Streamlining different processes and workflows by using user access control Onebook prompts efficiency and productivity levels of an organization, and reduces operating costs</p>
      </div>
      <div className="container">
      <section id="contact">
        
          <div class="row">
            <div class="col-md-6">
              <form>
              <p className="text-md-left font-weight-bold a1 a2">Reach us quickly</p>
  <div class="form-group text-md-left a1">
    <label for="formGroupExampleInput">Name</label>
    <input type="text" class="form-control" id="formGroupExampleInput"/>
  </div>
  <div class="form-group text-md-left a1">
    <label for="formGroupExampleInput2">Email</label>
    <input type="text" class="form-control" id="formGroupExampleInput2"/>
                </div>
                <div class="form-group text-md-left a1">
    <label for="formGroupExampleInput2">Phone</label>
    <input type="text" class="form-control" id="formGroupExampleInput2"/>
                </div>
                <div class="form-group text-md-left a1">
    <label for="formGroupExampleInput2">Message</label>
                  <textarea rows="8" cols="50"></textarea>
                  <button type="submit" class="btn btn-primary but">SEND MESSAGE</button>
                </div>
              
              </form>
            </div>
            <div class="col-md-6 text-md-left choose-img">
              <p>It's very easy to get in touch with us. Just use the contact form or pay us a visit for a coffee at the office.</p>
              <p><i class="fa fa-map-marker"></i>121 King St, Melbourne VIC 3000, Australia</p>
              <p><i class="fa fa-phone"></i>Phone: +61 2 8376 6284</p>
              <p><i class="fa fa-envelope-o"></i>Email : hello@yourdomain.com</p>
              <div class="map-responsive">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1943.246543940033!2d77.50323286572467!3d13.067905930073474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3cd80ca3283d%3A0xa3e95f06ce5bfc09!2sSapthagiri%20College%20of%20Engineering%2C%20Bengaluru.!5e0!3m2!1sen!2sin!4v1573394316238!5m2!1sen!2sin" width="600" height="450" frameborder="0" allowfullscreen=""></iframe>
              </div>
            </div>
        </div>
      </section>
      </div>
        
        
      
      <section id="footer">
        <div className="container text-md-left">
          <div className="row">
            <div className="col-md-3 footer-box">
              <p><b>COMPANY NAME</b></p>
              <p>About us</p>
              <p>About security</p>
              <p>User guide</p>
              <p>Privacy policy</p>
            </div>
            <div className="col-md-3 footer-box">
              <p><b>PRODUCT</b></p>
              <p>Discover features</p>
              <p>CMS integration</p>
              <p>Weekly session</p>
              <p>Free trials and demo</p>
            </div>
            <div className="col-md-3 footer-box">
              <p><b>CONTACT US</b></p>
              <p><i class="fa fa-map-marker"></i>121 King St, Melbourne, Australia</p>
              <p><i class="fa fa-phone"></i>Phone: +61 2 8376 6284</p>
              <p><i class="fa fa-envelope-o"></i>Email : hello@yourdomain.com</p>
             
            </div>
            <div className="col-md-3 footer-box">
              <img src="/footer.PNG" /><br></br>
              <p></p>
              <p></p>
              
             <a class="fb-ic">
            <i class="fa fa-facebook"> </i>
              </a>
              <a class="tw-ic">
                    <i class="fa fa-twitter"> </i>
                  </a>
                  <a class="gplus-ic">
            <i class="fa fa-google-plus"> </i>
              </a>
             
              <a class="ins-ic">
            <i class="fa fa-instagram"> </i>
              </a>
              
              <p className="aa">© copyright GoSofto Software</p>        
              
              </div>
          </div>
        </div>
      </section>
      

    </div>
  );
}

export default App;
