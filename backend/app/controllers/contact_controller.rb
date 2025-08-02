class ContactController < ApplicationController
  def create
    # handle contact form submission
    render json: { status: 'ok' }
  end
end
