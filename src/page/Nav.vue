<template>
    <div>
        <ul class="nav">
            <li><img :src="head" alt=""></li>
            <li>{{title}}</li>
            <li>phone:{{number}}</li>
        </ul>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        'head': 'https://ss0.baidu.com/73F1bjeh1BF3odCf/it/u=4135204926,1426603388&fm=85&s=682CA5523CB3E9A73498D14B0100E0E1',
        'title': 'title',
        'number': 12144
      }
    }
  }
</script>
<style lang="less" scoped>
    .nav {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 300px;
        border-right: green  5px solid;
        padding: 5px;
        background:limegreen ;
    }

    @media screen and (max-width: 750px) {
        .nav {
            flex-direction: row;
            li:first-child {
                float: left;
                border: 1px solid;
            }
        }

    }
</style>