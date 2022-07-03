<template >
  <div
      class="home"
      
  >
    <div
        class="main-hero"
        
    >
      <Topnav  />
      <div
          class="animation"
          
      >
        <img
            src="../assets/shape1.svg"
            height=""
            width=""
            class="shape1"
            
         />
        <img
            src="../assets/shape2.svg"
            height=""
            width=""
            class="shape2"
            
         />
        <img
            src="../assets/shape3.svg"
            height=""
            width=""
            class="shape3"
            
         />
        <img
            src="../assets/shape4.svg"
            height=""
            width=""
            class="shape4"
            
         />
        <img
            src="../assets/shape5.svg"
            height=""
            width=""
            class="shape5"
            
         />
      </div><div
                class="hero-txt-wrap"
                
            >
        <div
            class="hero-inner-txt-wrap"
            
        >
          <h1
              class="main-head left"
              
          ><span
    class="small-title"
    
>We invest in</span>Innovation Growth &amp; Momentum
        </h1>
          <p
              class="txt26"
              
          >
            Empowering highly innovative companies reach the next level of growth


          </p>
        </div>
      </div>
    </div>
    <div
        class="info-box"
        
    >
      <div
          class="num-wrap"
          
      >
        <h3
            class="color-num"
            
        >$40Mil</h3>
        <p
            class="under-num"
            
        >Invested<br  />since 2021</p>
      </div>
      <div
          class="num-wrap"
          
      >
        <h3
            class="color-num"
            
        >{{ companies.length }}</h3>
        <!-- Make a rolling number -->
        <p
            class="under-num"
            
        >Portfolio Companies</p>
      </div>
    </div>
    <div
        id="portfolio"
        class="portfolio"
        
    >
      <div
          class="comps-wrap"
          
      >
        <div
            v-for="company in companies"
            :key="company._id"
            @click="openPopup = company._id"
            class="comp-logo"
            
        >
          <img
              :src="company.logo.imageURL"
              
           />
        </div>
        <div
            v-for="company in companies"
            :key="company._id + 'popup'"
            
        >
          <div
              class="popup-wrap"
              :class="{ open: openPopup === company._id }"
              
          >
            <div
                class="popup"
                
            >
              <div
                  @click="openPopup = null"
                  class="close-pop"
                  
              >
                <img
                    src="../assets/close.svg"
                    
                 />
              </div>
              <img
                  :src="company.logo.imageURL"
                  class="pop-comp-logo"
                  
               />
              <h3
                  class="mid-head"
                  
              >{{ company.name }}</h3>
              <div
                  class="pop-txt-wrap"
                  
              >
                <div
                    v-html="company.description"
                    class="txt"
                    
                ></div>
                <a
                    class="txt bold"
                    :href="company.linkCompany"
                    target="_blank"
                    
                >{{ company.linkCompany }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
        class="color-sec thesis"
        
    >
      <div
          class="color-txt-wrap"
          
      >
        <h3
            class="main-head"
            
        >What We Do</h3>
        <p
            class="txt26"
            
        >
          We invest in innovative companies that strive to impact and advance
          their industry. Our founders fearlessly&nbsp;lead into the future,
          determined to bring a meaningful change to the world. Agmen’s mission
          is to empower and support founders as they charge this incredible
          journey.
        </p>
      </div>
      <div
          class="backbox1"
          
      ></div>
    </div>
    <div
        id="fund"
        class="fund-sec"
        
    >
      <div
          class="fund-box"
          
      >
        <h3
            class="main-head"
            
        >
          Progress
          <span
              class="amp"
              
          >&amp;</span>
          Movement
        </h3>
        <p
            class="txt"
            
        >
          Our size allows us to move quickly and operate with a high level of
          efficiency. With no cap or sector limits, we are free to invest in
          great companies - any industry or niche. We look for dreamers,
          visionaries, pioneers, and game-changers.<br  /><br  />Agmen /ˈaɡ.men/,
          [ˈäɡmɛn] in latin, means progress &amp; movement, and this is exactly
          what we aim to create. Since its founding in 2021, Agmen has invested
          in {{ companies.length }} companies, including Glossier, Brain Corp,
          Tanium, and Omada health.
        </p>
        <img
            src="../assets/white-icon.svg"
            height=""
            width=""
            class="icon"
            
         />
      </div>
      <div
          class="backbox1 fund"
          
      ></div>
      <div
          class="white-bot"
          
      ></div>
      <img
          src="../assets/sanfrancisco.jpg"
          height=""
          width=""
          class="sanfar"
          
       />
    </div>
    <div
        class="managing-sec hide"
        
    >
      <div
          class="managing-wrap"
          
      >
        <div
            class="mang-side"
            
        >
          <img
              src="../assets/Schmukler.jpg"
              height=""
              width=""
              class="profie"
              
           />
          <p
              class="txt26"
              
          >
            A visionary can’t help but take the risk because the impact is just
            too big not to pursue.
          </p>
          <div
              class="profile-back-box"
              
          ></div>
        </div>
        <div
            class="mange-main"
            
        >
          <h3
              class="main-head"
              
          >Managing Principle</h3>
          <p
              class="txt"
              
          >
            As a founder and venture capitalist, Yehuda Schmukler is a bridge
            for founders. Yehuda speaks real business and knows to recognize
            real opportunities. Yehuda has built and managed multiple successful
            healthcare companies and has been fortunate to invest in very
            impactful companies such as Chargepoint, Clover Health,
            DigitalOcean, DoorDash, Instacart, Nextdoor, Palantir, Sprinklr,
            Wish.
          </p>
        </div>
      </div>
    </div>
    <div
        id="contact"
        class="contact-sec"
        
    >
      <div
          class="cont-wrap"
          
      >
        <h3
            class="main-head"
            
        >Contact Us</h3>
        <form
            @submit.prevent="sendForm"
            v-if="formStatus != 'success'"
            class="cont-form"
            
        >
          <input
              placeholder="Full Name"
              type="text"
              id="firstID"
              name=""
              class="cont-input"
              v-model="form.name"
              
           />
          <input
              placeholder="Email Address"
              type="email"
              id=""
              name=""
              class="cont-input"
              v-model="form.email"
              
           />
          <textarea
              placeholder="Message"
              type="text"
              id=""
              name=""
              class="cont-input"
              v-model="form.message"
              
          ></textarea>
          <input
              type="submit"
              id=""
              value="Submit"
              class="cont-input btn"
              
           />
        </form>
        <div
            v-if="formStatus == 'fail'"
            class="form-fail"
            
        >
          <p >Something went wrong while submitting</p>
        </div>
        <div
            v-if="formStatus == 'success'"
            class="form-success"
            
        >
          <p >Thank you for getting in touch!</p>
        </div>
        <p >
          Email: info@agmencapital.com
          <span
              class="cont-sep"
              
          >|</span> Phone: 213-556-6511
        </p>
        <a
            href="https://www.linkedin.com/company/agmencapital/"
            target="_blank"
            class="linkedin"
            
        >
          <img
              src="../assets/linkedin.svg"
              height=""
              width=""
              
           />
        </a>
      </div>
      <div
          class="backbox1 fund cont"
          
      ></div>
    </div>
    <div
        class="footer"
        
    >
      <router-link
          to="/"
          class="footer-logo"
          
      >
        <img
            src="../assets/Agmen-logo-dark.svg"
            height=""
            width=""
            
         />
      </router-link>
      <div
          class="footer-links-wrap"
          
      >
        <a
            href="/#fund"
            class="footer-link"
            
        >Our Firm</a>
        <router-link
            to="/team"
            class="footer-link"
            
        >Team</router-link>

        <a
            href="/#portfolio"
            class="footer-link"
            
        >Portfolio Companies</a>
        <a
            href="/#contact"
            class="footer-link"
            
        >Contact Us</a>
        <router-link
            to="Privacypolicy"
            class="footer-link"
            
        >Privacy Policy</router-link>
        <router-link
            to="Termsofuse"
            class="footer-link"
            
        >Terms of Use</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    components: {},
    data() {
      return {
        openPopup: null,
        openSideBar: false,
        formStatus: "",
        form: {
          name: "",
          message: "",
          email: "",
        },
        companies: [],
      };
    },
    methods: {
      async sendForm() {
        try {
          await this.$db.collection("contactUs").post(this.form);
          this.formStatus = "success";
        } catch (err) {
          console.log(err.response.data);
          this.formStatus = "fail";
        }
      },
    },
    async beforeMount() {
      let { data: companies } = await this.$db
        .collection("companies")
        .query("draft", "=", false)
        .get();
      this.companies = companies;
    },
    name: "Home"
};
</script>
<style scoped=""></style>
