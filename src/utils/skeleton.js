import Vue from 'vue';
import SkeletonHome from '../components/Skeleton/skeleton-2';
import SkeletonAbout from '../components/Skeleton/skeleton-2';

export default new Vue({
  components: {
    SkeletonHome,
    SkeletonAbout
  },
  render: h => h(SkeletonHome),
});
