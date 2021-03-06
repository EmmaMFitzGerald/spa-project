class MemoriesController < ApplicationController
  before_action :set_memory, only: [:show, :update, :destroy]

  # GET /memories
  def index
    @memories = Memory.all

    render json: @memories
  end

  # GET /memories/1
  def show
    render json: @memory
  end

  # POST /memories
  def create
    child = Child.find_or_create_by(name: params[:child])
    @memory = Memory.new(memory_params)
    @memory.child = child

    if @memory.save
      render json: @memory, status: :created, location: @memory
    else
      render json: @memory.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /memories/1
  def update
    if @memory.update(memory_params)
      render json: @memory
    else
      render json: @memory.errors, status: :unprocessable_entity
    end
  end

  # DELETE /memories/1
  def destroy
    @memory.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_memory
      @memory = Memory.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def memory_params
      params.require(:memory).permit(:title, :category, :content, :child_id)
    end
end
