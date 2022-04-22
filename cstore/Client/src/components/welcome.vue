<style>

.glow {
  color: #fff;
  animation: glow 1s ease-in-out infinite alternate;
}

@-webkit-keyframes glow {
  from {
    text-shadow: 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #15ce24, 0 0 30px #15ce24, 0 0 40px #15ce24, 0 0 50px #15ce24, 0 0 60px #15ce24;
  }
  
  to {
    text-shadow: 0 0 10px #fff, 0 0 15px #ff0000, 0 0 20px #ff0000, 0 0 30px #ff0000, 0 0 40px #ff0000, 0 0 50px #ff0000, 0 0 60px #ff0000;
  }
}
</style>
<template>
    <div class="flex-grow-1 d-flex justify-content-center align-items-center text-white flex-1">
        <div style="box-shadow: -0px 5px 50px #686767;" class="p-4 border border-3 rounded-pill">
            <div class="m-5 h3">
                <div class="glow">Hello Admin!</div>
                <div class="glow">Welcome to your C-Store management site.</div>
            </div>
        </div>
    </div>
</template>