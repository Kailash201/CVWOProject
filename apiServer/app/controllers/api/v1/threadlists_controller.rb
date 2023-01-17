module Api
  module V1
    class ThreadlistsController < ApplicationController
      def index
        threadlists = ThreadList.all
        render json: {status: 'SUCCESS', message:'Get Threads', data:threadlists}, status: :ok
      end

      def show
        thread = ThreadList.find(params[:id])
        render json: {status: 'SUCCESS', message:'Single Thread', data:thread}, status: :ok 
      end

      def create
        #thread = ThreadList.new(thread_params)
        profile = Profile.find(params[:profile_id])
        thread = profile.thread_list.create(thread_params)

        if thread.save
          render json: {status: 'SUCCESS', message:'Added Thread', data:thread}, status: :ok 
        else
          render json: {status: 'ERROR', message:'Thread not added', data:thread.errors}, status: :unprocessable_entity
        end

      end

      def update
        thread = ThreadList.find(params[:id])
        if thread.update(thread_params)
          render json: {status: 'SUCCESS', message:'Updated Thread', data:thread}, status: :ok 
        else
          render json: {status: 'ERROR', message:'Thread not updated', data:thread.errors}, status: :unprocessable_entity 
        end 
          
      end

      def destroy
        thread = ThreadList.find(params[:id]).destroy
        render json: {status: 'SUCCESS', message:'deleted Thread', data:thread}, status: :ok 

      end

      private 

      def thread_params
        params.permit(:title, :desc, :like, :dislike, :comments, :user)
      end

    end
  end
end


