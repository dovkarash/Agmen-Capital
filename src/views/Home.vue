<template>
  <div class="home">
    <div class="main-hero">
      <div class="menu">
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

      <div class="hero-txt-wrap">
        <div class="hero-inner-txt-wrap">
          <h1 class="main-head"><span class="small-title">We invest in</span>Inovation, Growth and Momentum.</h1>
          <p class="txt26">
            Agmen invests in rapidly growing companies with great momentum and
            disruptive technology
          </p>
        </div>
      </div>

      <div class="animation">
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
    <div class="info-box">
      <div class="num-wrap">
        <h3 class="color-num">$35Mil</h3>
        <p class="under-num">Deployed</p>
      </div>
      <div class="num-wrap">
        <h3 class="color-num">8</h3>
        <p class="under-num">Acquisitions</p>
      </div>
    </div>
    <div
        id="portfolio"
        class="portfolio"
    >
      <div class="comps-wrap">
        <div
            v-for="company in companies"
            :key="company._id"
            @click="openPopup = company._id"
            class="comp-logo"
        >
          <img :src="company.logo.imageURL" />
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
            <div class="popup">
              <div
                  @click="openPopup = null"
                  class="close-pop"
              >
                <img src="../assets/close.svg" />
              </div>
              <img
                  :src="company.logo.imageURL"
                  class="pop-comp-logo"
               />
              <h3 class="mid-head">{{ company.name }}</h3>
              <div class="pop-txt-wrap">
                <div
                    v-html="company.description"
                    class="txt"
                ></div>
                <a
                    class="txt bold"
                    href="company.linkCompany"
                    target="_blank"
                >{{ company.linkCompany }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="color-sec thesis">
      <div class="color-txt-wrap">
        <h3 class="main-head">Investment Thesis</h3>
        <p class="txt26">Agmen Capital invests in late stage technology companies with serious momentum, marketshare growth, disruptive in industries</p>
      </div>
      <div class="backbox1"></div>
    </div>
    <div
        id="fund"
        class="fund-sec"
    >
      <div class="fund-box">
        <h3 class="main-head">The Fund</h3>
        <p class="txt">Agmen Asset Management is a fund that collects a syndicate of investors around the unique deals it locates.The fund has been active for 2 years and has invested in 8 companies in total, investing $35m so far.</p>
        <img
            src="../assets/white-icon.svg"
            height=""
            width=""
            class="icon"
         />
      </div>
      <div class="backbox1 fund"></div>
      <div class="white-bot"></div>
      <img
          src="../assets/sanfrancisco.jpg"
          height=""
          width=""
          class="sanfar"
       />
    </div>
    <div class="managing-sec">
      <div class="managing-wrap">
        <div class="mang-side">
          <img
              src="../assets/Schmukler.jpg"
              height=""
              width=""
              class="profie"
           />
          <p class="txt26">What I look for in great founders is grit and integrity, the rest will sort itself out</p><p class="big-quote">"</p>
          <div class="profile-back-box"></div>
        </div>
        <div class="mange-main">
          <h3 class="main-head">Managing Principle</h3>
          <p class="txt">Yehuda is a successful entrepreneur and investor. He is a healthcare
        executive who owns and operates several nursing homes throughout
        North America. From 2015-2021, he personally acquired minority
        stakes from shareholders and former employees in private companies.
        Yehuda has invested in companies like Chargepoint (CHPT), Clover
        Health (CLOV), DigitalOcean (DOCN), DoorDash (DASH), Instacart,
        Nextdoor (KIND), Palantir (PLTR), Sprinklr (CXM), Wish (WISH), and
        many others.</p>
        </div>
      </div>
    </div>
    <div
        id="contact"
        class="contact-sec"
    >
      <div class="cont-wrap">
        <h3 class="main-head">Contact Us</h3>
        <form
            @submit.prevent="sendForm"
            v-if="formStatus != 'success'"
            class="cont-form"
        >
          <input
              placeholder="Name"
              type="text"
              id=""
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
          <p>Something went wrong while submitting</p>
        </div>
        <div
            v-if="formStatus == 'success'"
            class="form-success"
        >
          <p>Thank you for getting in touch!</p>
        </div>
        <p>Email: info@agmencapital.com <span class="cont-sep">|</span> Phone: 0000000000</p>
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
      <div class="backbox1 fund cont"></div>
    </div>
    <div class="footer">
      <router-link
          to="/"
          class="footer-logo"
      >
        <img
            src="../assets/Agmen-logo-dark.svg"
            height=""
            width=""
         /></router-link>
      <div class="footer-links-wrap">
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