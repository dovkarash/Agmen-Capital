<template >
  <div
      class="home"
      
  >
    <div
        class="main-hero"
        
    >
      <div
          class="menu"
          
      >
        <router-link
            to="/"
            class="logo-wrap"
            
        >
          <img
              src="../assets/white-logo.svg"
              height=""
              width=""
              
           /></router-link>
        <div
            class="menu-links-wrap"
            :class="{ open: openSideBar }"
            
        >
          <div
              @click="openSideBar = false"
              href=""
              class="bgl-close-menu-btn"
              
          >
            <img
                src="../assets/close.svg"
                height=""
                width=""
                
             />
          </div>
          <a
              href="/#fund"
              class="nav-link"
              
          >Our Firm</a>
          <a
              href="/#portfolio"
              class="nav-link"
              
          >Portfolio Companies</a>
          <a
              href="/#contact"
              class="nav-link"
              
          >Contact Us</a>
        </div>
        <div
            @click="openSideBar = true"
            class="menu-btn"
            
        >
          <img
              src="../assets/menu.svg"
              height=""
              width=""
              
           />
        </div>
      </div>

      <div
          class="hero-txt-wrap"
          
      >
        <div
            class="hero-inner-txt-wrap"
            
        >
          <h1
              class="main-head left"
              
          >
            <span
                class="small-title"
                
            >We invest in</span>Innovation Growth &amp;
            Momentum
          </h1>
          <p
              class="txt26"
              
          >We invest in companies that change a paradigm make a difference.</p>
        </div>
      </div>

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
            
         /><img
               src="../assets/shape3.svg"
               height=""
               width=""
               class="shape3"
               
            /><img
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
            
        >$35Mil</h3>
        <p
            class="under-num"
            
        >Deployed</p>
      </div>
      <div
          class="num-wrap"
          
      >
        <h3
            class="color-num"
            
        >9</h3>
        <!-- Make a rolling number -->
        <p
            class="under-num"
            
        >Investments</p>
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
            :key="company._id"
            class="comp-logo"
            
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
            
        >Investment Thesis</h3>
        <p
            class="txt26"
            
        >
          We invest in companies with a massive vision, a good plan and the
          tenacity to execute. We empower our founders to lead and charge
          forward
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
            
        >Progress
        <span
            
            class="amp"
        >&amp;</span>
        Movement</h3>
        <p
            class="txt"
            
        >With no sector, cap limits, or complex structures. We have the liberty to explore partnering with founders that have an appetite for enormous growth and building companies that are meaningful to the world.<br  />Agmen /ˈaɡ.men/, [ˈäɡmɛn] in latin, means progress &amp; movement, for us, it's not just a name, we think fast and act fast. We partner with founders that share the same vision. Since its founding in 2021, Agmen has invested in 9 companies, including Glossier, Brain Corp, ​​Tanium, Omada.</p>
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
        class="managing-sec"
        
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
              
          >A visionary can’t help but take the risk because the
          impact is just too big not to pursue.</p>
          <p
              class="big-quote"
              
          >"</p>
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
              
          >As a founder and venture capitalist, Yehuda Schmukler is a bridge
      for founders. Yehuda speaks real business and knows to recognize
      real opportunities. Yehuda has built and managed multiple successful healthcare companies and has been fortunate to invest
      in very impactful companies such as Chargepoint, Clover Health, DigitalOcean, DoorDash, Instacart, Nextdoor, Palantir, Sprinklr, Wish.</p>
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
              placeholder="Name"
              type="text"
              id="firstID"
              name=""
              class="cont-input"
              v-model="form.name"
              
           /><input
                 placeholder="Email Address"
                 type="email"
                 id=""
                 name=""
                 class="cont-input"
                 v-model="form.email"
                 
              /><textarea
                    placeholder="Message"
                    type="text"
                    id=""
                    name=""
                    class="cont-input"
                    v-model="form.message"
                    
                ></textarea><input
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
        <p >Email: info@agmencapital.com <span
                                 
                                 class="cont-sep"
                             >|</span> Phone: 213-556-6511</p>
        <a
            href="https://www.linkedin.com/company/agmencapital/"
            target="_blank"
            class="linkedin"
            
        >
          <img
              src="../assets/linkedin.svg"
              height=""
              width=""
              
           /></a>
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
            
         /></router-link>
      <div
          class="footer-links-wrap"
          
      >
        <a
            href="/#fund"
            class="footer-link"
            
        >Our Firm</a><a
                         href="/#portfolio"
                         class="footer-link"
                         
                     >Portfolio Companies</a><a
                                                 href="/#contact"
                                                 class="footer-link"
                                                 
                                             >Contact Us</a><router-link
                                                                to="Privacypolicy"
                                                                class="footer-link"
                                                                
                                                            >Privacy Policy</router-link><router-link
                                                                                             to="Termsofuse"
                                                                                             class="footer-link"
                                                                                             
                                                                                         >Terms of Use</router-link>
      </div>
    </div>
  </div>
</template>


<script>
export default {
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
    console.log(companies);
    this.companies = companies;
  },
  name: "Home",
};
</script>
<style scoped=""></style>
