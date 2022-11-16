<template>
  <h1 style="padding: 0 300px">Xin chào {{ nameUser }}</h1>
  <h1 style="padding: 0 300px" v-if="!nameUser">Bạn chưa đăng nhập !</h1>
</template>

<script>
export default {
  mounted() {
    let token = localStorage.getItem("token");
    var me = this;
    me.axios
      .get("https://localhost:44335/api/Authenticate/get-user", {
        headers: {
          Authorization: `Bearer ${token}`,
          token: token,
        },
      })
      .then((response) => {
        me.nameUser = response.data.userName;
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  data() {
    return {
      nameUser: null,
    };
  },
};
</script>

<style></style>
