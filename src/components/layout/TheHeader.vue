<template>
  <div class="header">
    <div class="logo"></div>
    <div class="header-item">Vé máy bay</div>
    <div class="header-item">Du lịch</div>
    <div class="header-item">Khách sạn</div>
    <div class="header-item">Visa</div>
    <div class="header-item">Combo</div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  height: 60px;
  background-color: #0064d2;
  padding: 0 300px;
  font-size: 14px;
  color: white;
  box-sizing: border-box;
}
.logo {
  width: 150px;
  height: 50px;
  background-image: url(../../assets/logo.png);
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;
}
.header .header-item {
  margin: 24px;
  box-sizing: border-box;
  cursor: pointer;
}
</style>
