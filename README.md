#Webpack Angular ES6
A boilerplate for writing modular Angular 1.X in ES6 using Webpack.

##Quick start

###Install dependencies
```
npm install
```
####Dev
```
npm run dev
```
In your browser, navigate to: http://localhost:8080/
####Test
```
npm run test
```

####Production
```
npm run build 
```
Copy everything in `build/` folder to the server.

####Demo

[Demo](http://geniuscarrier.com/demo/webpack-angular-es6)

##Angular Modules

Instead of using the great [AngularJS Seed Project](https://github.com/angular/angular-seed), which is using Horizontal Modules, provided by the AngularJS team, I am using Vertical Modules, which is highly inspired by [MEAN.JS](https://github.com/meanjs/mean). This helps us divide the project logic into modules that represent individual logical units and scale well for bigger projects that are more maintainable in the long term. The following Module structure and folder structure use demo example to demonstrate how it works.

###Modules Structure


<table>
	<thead>
		<tr>
			<th colspan='4'>Application</th>
		</tr>
		<tr>
			<th>HomeModule</th>
			<th>PostModule</th>
			<th>CommentModule</th>
			<th>UserModule</th>
		</tr>
	</thead>
<tbody>
	<tr>
		<td>HomeController</td>
		<td>PostController</td>
		<td>CommentController</td>
		<td>UserController</td>
	</tr>
	<tr>
		<td>HomeDirective</td>
		<td>PostDirective</td>
		<td>CommentDirective</td>
		<td>UserDirective</td>
	</tr>
	<tr>
		<td>HomeService</td>
		<td>PostService</td>
		<td>CommentService</td>
		<td>UserService</td>
	</tr>
	<tr>
		<td>HomeFilter</td>
		<td>PostFilter</td>
		<td>CommentFilter</td>
		<td>UserFilter</td>
	</tr>
	<tr>
		<td>HomeRoutes</td>
		<td>PostRoutes</td>
		<td>CommentRoutes</td>
		<td>UserRoutes</td>
	</tr>
	<tr>
		<td>HomeView</td>
		<td>PostView</td>
		<td>CommentView</td>
		<td>UserView</td>
	</tr>
</tbody>
</table>

###Folder Structure

This structure allows clear separation of functionality and concerns.

```
|-sass
|-images
|-modules
|---home
|-----config
|-----controller
|-------tests
|-----directive
|-------tests
|-----service
|-------tests
|-----filter
|-------tests
|-----view
|-----sass
|---post
|-----config
|-----controller
|-------tests
|-----directive
|-------tests
|-----service
|-------tests
|-----filter
|-------tests
|-----view
|-----sass
|---comment
|-----config
|-----controller
|-------tests
|-----directive
|-------tests
|-----service
|-------tests
|-----filter
|-------tests
|-----view
|-----sass
|---users
|-----config
|-----controller
|-------tests
|-----directive
|-------tests
|-----service
|-------tests
|-----filter
|-------tests
|-----view
|-----sass
```

##Basic Usage

This boilerplate comes with a blog example. I am taking post module as an example to illustrate how the Angular work with Webpack in ES6.


###API

Using [JSONPlaceholder](http://jsonplaceholder.typicode.com/) for fake Online REST API for Testing and Prototyping

###Controller

```
export default class PostController {
  constructor($stateParams, $location, post, user, comments) {
    this.$stateParams = $stateParams;
    this.$location = $location;
    this.post = post;
    this.user = user;
    this.comments = comments;
    this.author = 'Yang Zhao';
  }
}

PostController.$inject = ['$stateParams', '$location', 'post', 'user', 'comments'];

```

###Directive

```
/*@ngInject*/
export default class Menu {
  constructor() {
    this.template = require('../view/menu.html');
    this.restrict = 'E';
    this.scope = {};
    this.controller = HomeController;
  }

  // optional compile function
  compile(tElement) {
    return this.link.bind(this);
  }

  // optional link function
  link(scope, element, attributes, controller) {
    scope.isActive = function(viewLocation) {
      return viewLocation === controller.$location.path();
    };
  }
}

```

###Service

```
/*@ngInject*/
export default class PostService {
  constructor($http) {
    this.$http = $http;
  }

  getPosts() {
    return this.$http.get('http://jsonplaceholder.typicode.com/posts');
  }

  getPost(postId) {
    return this.$http.get('http://jsonplaceholder.typicode.com/posts/' + postId);
  }

  getUser(usreId) {
    return this.$http.get('http://jsonplaceholder.typicode.com/users/' + usreId);
  }

  getComments(postId) {
    return this.$http.get('http://jsonplaceholder.typicode.com/posts/' + postId + '/comments');
  }
}

```

###Filter

```
export default () => {
  return (input) => {
    return input + ' <a href="mailto:' + input + '"><i class="fa fa-reply" aria-hidden="true"></i></a>';
  }
}

```

###Routes

```
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
```

###Test (Controller)

```
describe('PostController', () => {
  let controller;
  let service;
  beforeEach(() => {
    angular.mock.module(post);
    angular.mock.inject(($injector, $controller, $stateParams, $location) => {
      service = $injector.get('PostService');
      controller = $controller('PostController', {
        $stateParams: $stateParams,
        $location: $location,
        post: service,
        user: service,
        comments: service
      });
    })
  });


  it('should have correct author name', () => {
    assert.equal(controller.author, 'Yang Zhao', 'PostController has correct author name');
  });
});


```
###Index (Post Module)

```
import routes from './config/routes';
import PostService from './service/service';
import PostController from './controller/post';
import PostDirective from './directive/post';
import PostFilter from './filter/post';

export default angular.module('post')
  .config(routes)
  .service('PostService', PostService)
  .controller('PostController', PostController)
  .directive('PostDirective', () => new PostDirective())
  .filter('PostFilter', PostFilter)
  .name;
```

###Application

```
import home from './modules/home';
import post from './modules/post';
import comment from './modules/comment';
import user from './modules/user';

/*@ngInject*/
angular.module('app', [home, post, comment, user]);
```
