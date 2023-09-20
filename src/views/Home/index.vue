<template>
  <div>
    <TypeNav />
    <ListContainer />
    <TodayRecommend />
    <Rank />
    <Like />
    <Floor v-for="(floor) in floorList" :key="floor.id" :list="floor" />
    <Brand />
  </div>
</template>

<script>
import ListContainer from "@/views/Home/ListContainer";
import TodayRecommend from "@/views/Home/TodayRecommend";
import Rank from "@/views/Home/Rank";
import Like from "@/views/Home/Like";
import Floor from "@/views/Home/Floor";
import Brand from "@/views/Home/Brand";

import { mapState } from "vuex";
export default {
  components: { ListContainer, TodayRecommend, Rank, Like, Floor, Brand },
  mounted() {
    this.$store.dispatch("getFloorList");
  },
  computed: {
    ...mapState({
      floorList: (state) => state.home.floorList,
    }),
  },
};
</script>

<style lang="scss" scoped></style>
