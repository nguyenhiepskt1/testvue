<template>
  <form @submit.prevent="handleSubmit()" class="form-login">
    <div class="login-logo"></div>
    <div class="login-dialog">
      <div class="dialog-header">ĐĂNG NHẬP THÀNH VIÊN</div>
      <div class="dialog-username">
        <div class="title">Tên tài khoản</div>
        <input
          v-model="user.username"
          class="input"
          type="text"
          placeholder="Nhập tên tài khoản"
        />
      </div>
      <div class="dialog-password">
        <div class="title">Mật khẩu</div>
        <input
          v-model="user.password"
          class="input"
          :type="typeInput"
          placeholder="Nhập mật khẩu"
        />
        <div class="icon-showpass" @click.prevent="onShowPassword">
          <fa :icon="icon"></fa>
        </div>
      </div>
      <button class="button-login">Đăng nhập</button>
      <div class="text-signup">
        Bạn chưa có tài khoản?
        <router-link to="/signup" style="margin-left: 5px">Đăng ký</router-link>
      </div>
    </div>
    <div class="login-footer">© 2022 MoizTravel. All rights reserved</div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      isHidePassword: false,
      icon: "eye",
      typeInput: "password",
      user: {
        username: "",
        password: "",
      },
    };
  },
  watch: {
    isHidePassword: function (value) {
      if (value == true) {
        (this.icon = "eye-slash"), (this.typeInput = "text");
      } else {
        (this.icon = "eye"), (this.typeInput = "password");
      }
    },
  },
  methods: {
    /**
     * Xử lý ẩn hiện password
     * NTHIEP (16/10/2022)
     */
    onShowPassword() {
      this.isHidePassword = !this.isHidePassword;
    },
    /**
     * Xử lý login
     * NTHIEP (22/10/2022)
     */
    async handleSubmit() {
      var me = this;
      await me.axios
        .post("https://localhost:44335/api/Authenticate/login", me.user)
        .then((response) => {
          alert("Đăng nhập thành công");
          localStorage.setItem("token", response.data.token);
          me.$router.push("/");
        })
        .catch(function (error) {
          console.log(error);
          alert("Thông tin đăng nhập không chính xác");
        });
    },
  },
};
</script>

<style scoped>
.form-login {
  position: relative;
  height: 100vh;
  background: #0064d2;
}
.login-logo {
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
.login-dialog {
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
.login-dialog .dialog-header {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 30px;
  box-sizing: border-box;
}
.login-dialog .title {
  font-size: 17px;
  margin-bottom: 10px;
  box-sizing: border-box;
}
.login-dialog .input {
  padding: 10px;
  margin-bottom: 30px;
  height: 45px;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
}
.login-dialog .input:focus {
  border: 2px solid #0064d2;
  outline: none;
}
.login-dialog .dialog-password {
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
.save-login {
  display: flex;
  align-items: center;
  color: #50545e;
}
.save-login .checkbox {
  width: 20px;
  height: 20px;
  margin-right: 8px;
  cursor: pointer;
  box-sizing: border-box;
}
.icon-showpass {
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
}
.save-login {
  margin-bottom: 30px;
}
.button-login {
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
.login-footer {
  position: relative;
  top: 732px;
  display: flex;
  justify-content: center;
  color: white;
  letter-spacing: 1px;
}
</style>
