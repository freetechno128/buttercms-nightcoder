import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Blog from './views/Blog'
import BlogPost from './views/BlogPost'
import Categories from './views/Categories'
import Category from './views/Category'
import Customers from './views/Customers'
import Customer from './views/Customer'
import Faq from './views/Faq'
import Homepage from './views/Homepage'

const AppRouter = () => (
  <Router>
    <div>
      <Route path='/' exact component={Homepage} />
      <Route path='/blog/:page' exact component={Blog} />
      <Route path='/blog' exact component={Blog} />
      <Route path='/blog/posts/:post' component={BlogPost} />
      <Route path='/blog/categories' exact component={Categories} />
      <Route path='/blog/category/:category' exact component={Category} />
      <Route path='/customers' exact component={Customers} />
      <Route path='/customer/:customer' component={Customer} />
      <Route path='/faq' component={Faq} />
    </div>
  </Router>
)

ReactDOM.render(<AppRouter />, document.getElementById('root'))
