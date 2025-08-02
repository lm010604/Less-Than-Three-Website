class PostsController < ApplicationController
  def index
    posts = [{ id: 1, title: 'Hello World', body: 'First post' }]
    render json: posts
  end
end
