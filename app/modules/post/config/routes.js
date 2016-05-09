/*@ngInject*/
export default ($stateProvider) => {
  $stateProvider
    .state('listPosts', {
      url: '/posts',
      template: require('../view/posts.html'),
      controller: 'PostsController',
      controllerAs: 'posts',
      resolve: {
        posts: (PostService) => {
          return PostService.getPosts().then((object) => {
            return object.data;
          });
        }
      }
    })
    .state('post', {
      url: '/posts/:postId',
      template: require('../view/post.html'),
      controller: 'PostController',
      controllerAs: 'post',
      resolve: {
        post: (PostService, $stateParams) => {
          return PostService.getPost($stateParams.postId).then((object) => {
            return object.data;
          });
        },
        user: (PostService, post) => {
          return PostService.getUser(post.userId).then((object) => {
            return object.data;
          });
        },
        comments: (PostService, post) => {
          return PostService.getComments(post.id).then((object) => {
            return object.data;
          });
        }
      }
    });
}
