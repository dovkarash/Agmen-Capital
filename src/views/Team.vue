
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
              
           />
        </router-link>
        <div
            class="menu-links-wrap"
            
        >
          <a
              href="/#fund"
              class="nav-link"
              
          >Our Firm</a>
          <router-link
              to="/team"
              class="nav-link"
              
          >Team</router-link>

          <a
              href="/#portfolio"
              class="nav-link"
              
          >Portfolio Companies</a>
          <a
              href="/#contact"
              class="nav-link"
              
          >Contact Us</a><a
                             type="button"
                             class="cta"
                             href="https://www.navconsulting.net/NAVPortal/default.aspx"
                             
                         >Investor Login</a>
        </div>
        <div
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
      </div>
    </div>
    <div
        class="managing-sec"
        
    >
      <div
          v-for="member in team"
          :key="member._id"
          class="managing-wrap pad"
          
      >
        <div
            class="mang-side"
            
        >
          <img
              :src="member.profile.imageURL"
              height=""
              width=""
              class="profie"
              
           />
          <p
              class="txt26"
              
          >
            {{ member.quote }}
          </p>
          <p
              v-if="member.quote"
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
              class="mid-head"
              
          >{{ member.name }}</h3>
          <p
              v-html="member.bio"
              class="txt"
              
          ></p>
        </div>
      </div>
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
  data() {
    return {
      openSideBar: false,
      team: [],
    };
  },
  async beforeMount() {
    let { data: team } = await this.$db
      .collection("team")
      .query("draft", "=", false)
      .sort("order")
      .get();
    this.team = team;
  },
  name: "Team",
};
</script>
<style scoped=""></style>