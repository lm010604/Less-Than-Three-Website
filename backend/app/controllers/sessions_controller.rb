class SessionsController < ApplicationController
  def create
    # handle login logic
    render json: { token: 'fake-jwt-token' }
  end
end
