<template>
  <form @submit.prevent="handleSubmit" class="form-signup">
    <div class="signup-logo"></div>
    <div class="signup-dialog">
      <div class="dialog-header">ĐĂNG KÝ THÀNH VIÊN</div>
      <div class="dialog-username">
        <div class="title">Tên tài khoản</div>
        <input
          v-model="user.username"
          class="input"
          type="text"
          placeholder="Nhập tên tài khoản"
          @blur="validate()"
          :class="{ 'is-invalid': errors.username }"
        />
        <div v-if="errors.username" class="feedback-invalid">
          {{ errors.username }}
        </div>
      </div>
      <div class="dialog-email">
        <div class="title">Email</div>
        <input
          v-model="user.email"
          class="input"
          type="text"
          placeholder="Nhập email"
          @blur="validate()"
          :class="{ 'is-invalid': errors.email }"
        />
        <div v-if="errors.email" class="feedback-invalid" style="top: 265px">
          {{ errors.email }}
        </div>
      </div>
      <div class="dialog-password">
        <div class="title">Mật khẩu</div>
        <input
          v-model="user.password"
          class="input"
          type="password"
          placeholder="Nhập mật khẩu"
          @blur="validate()"
          :class="{ 'is-invalid': errors.password }"
        />
        <div v-if="errors.password" class="feedback-invalid" style="top: 50px">
          {{ errors.password }}
        </div>
      </div>
      <button class="button-signup">Đăng ký</button>
      <div class="text-signup">
        Bạn đã có tài khoản?
        <router-link to="/login" style="margin-left: 5px"
          >Đăng nhập</router-link
        >
      </div>
    </div>
    <div class="signup-footer">© 2022 MoizTravel. All rights reserved</div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      errors: {
        username: "",
        email: "",
      },
      user: {
        username: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    /**
     * Xử lý sign up
     * NTHIEP (22/10/2022)
     */
    async handleSubmit() {
      var me = this;
      if (me.validate()) {
        await me.axios
          .post("https://localhost:44335/api/Authenticate/register", me.user)
          .then(() => {
            alert("Đăng ký thành công");
            me.$router.push("/login");
          })
          .catch(function (error) {
            if (
              error.response.status == 500 &&
              error.response.data.message == "User already exists!"
            ) {
              alert("Tên tài khoản đã tồn tại !");
            }
          });
      }
    },
    /**
     * Regex validate email
     * NTHIEP (22/10/2022)
     */
    validateEmail(email) {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    },
    /**
     * Regex password
     * NTHIEP (22/10/2022)
     */
    validatePassword(password) {
      return String(password).match(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{6,}$"
      );
    },
    /**
     * Validate
     * NTHIEP (22/10/2022)
     */
    validate() {
      var me = this;
      let isValid = true;
      me.errors = {
        username: "",
        email: "",
      };
      if (!me.user.username) {
        this.errors.username = "Tên tài khoản không được để trống!";
        isValid = false;
      }
      if (!me.validateEmail(me.user.email)) {
        this.errors.email = "Hãy nhập email đúng định dạng";
        isValid = false;
      }
      if (!me.validatePassword(me.user.password)) {
        this.errors.password =
          "Mật khẩu tối thiểu 6 ký tự, viết hoa, viết thường và 1 ký tự đặc biệt !";
        isValid = false;
      }
      return isValid;
    },
  },
};
</script>

<style scoped>
.feedback-invalid {
  color: red;
  position: absolute;
  top: 160px;
}
.is-invalid {
  border: 1px solid red !important;
}
.form-signup {
  position: relative;
  height: 100vh;
  background: #0064d2;
}
.signup-logo {
  margin-top: 50px;
  margin-bottom: 50px;
  width: 500px;
  height: 200px;
  background-image: url(../../assets/logo.png);
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  box-sizing: border-box;
}
.signup-dialog {
  padding: 25px;
  background: #fff;
  width: 550px;
  border-radius: 8px;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  margin-top: 250px;
  box-sizing: border-box;
}
.signup-dialog .dialog-header {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 30px;
  box-sizing: border-box;
}
.signup-dialog .title {
  font-size: 17px;
  margin-bottom: 10px;
  box-sizing: border-box;
}
.signup-dialog .input {
  padding: 10px;
  margin-bottom: 30px;
  height: 45px;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
}
.signup-dialog .input:focus {
  border: 2px solid #0064d2;
  outline: none;
}
.signup-dialog .dialog-password {
  position: relative;
  top: 30px;
  margin-bottom: 30px;
  box-sizing: border-box;
}
.dialog-password .title {
  position: absolute;
  top: -27px;
  left: 0;
}
.dialog-password .forgot {
  position: absolute;
  top: -27px;
  right: 0;
  color: #0064d2;
  cursor: pointer;
}
.button-signup {
  height: 48px;
  width: 100%;
  border: none;
  color: #fff;
  background: #0064d2;
  border-radius: 5px;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 30px;
  box-sizing: border-box;
}
.text-signup {
  display: flex;
  justify-content: center;
}
.text-signup a {
  text-decoration: none;
  color: #0064d2;
}
.signup-footer {
  position: relative;
  top: 782px;
  display: flex;
  justify-content: center;
  color: white;
  letter-spacing: 1px;
}
</style>
