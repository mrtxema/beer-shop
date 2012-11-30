class BeersController < ApplicationController
  respond_to :json
  
  # GET /beers
  def index
    respond_with(@beers = Beer.all)
  end

  # GET /beers/1
  def show
    @beer = Beer.find(params[:id])
    respond_with(@beer)
  end

  # POST /beers
  def create
    @beer = Beer.new(params[:beer])
    @beer.save
    respond_with(@beer)
  end

  # PUT /beers/1
  def update
    @beer = Beer.find(params[:id])
    @beer.update_attributes(params[:beer])
    respond_with(@beer)
  end

  # DELETE /beers/1
  def destroy
    @beer = Beer.find(params[:id])
    @beer.destroy
    respond_with(@beer)
  end
end
