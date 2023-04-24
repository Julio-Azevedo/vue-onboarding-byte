<template>
    <div class="preload-animation">
        <div class="preload">
            <div class="load-icon"><span></span></div>
        </div>
    </div>
</template>

<script>
export default {
    name : "LoadingPage",
}
</script>

<style scoped>
    .preload-animation {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translatey(0px);
    animation: ani-load 1s ease-in-out infinite;
    animation-delay: .3s;
}

@keyframes ani-load {
    0%{
        transform: translateY(0xp);
    }
    50% {
        transform: translateY(-20px);
    }
    100% {
        transform: translateY(0px);
    }
}

.preload {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-100%, -50%);
}

.load-icon {
    width: 85px;
    height: 263px;
    background-color: var(--quaternary-color);
    position: relative;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
}

.load-icon::before {
    content: "";
    width: 80px;
    height: 156px;
    position: absolute;
    background-color: var(--primary-color);
    bottom: 30px;
    box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.25);
    left: 40px;
    transform: rotate(-90deg)
}

span {
    width: 80px;
    height: 196px;
    background-color: var(--primary-color);
    position: absolute;
    left: 68px;
    transform: rotate(-90deg);
    top: -57px;
    z-index: -1;
    box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.25);
}
</style>