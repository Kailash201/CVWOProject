module Api
    module V1
        class ProfilesController < ApplicationController
            def index
                threadlists = Profile.all
                render json: {status: 'SUCCESS', message:'Get Profiles', data:threadlists}, status: :ok
            end

            def show
                thread = ThreadList.find(params[:id])
                render json: {status: 'SUCCESS', message:'Single profile', data:thread}, status: :ok 
            end

            def create
                thread = Profile.new(profile_params)

                if thread.save
                render json: {status: 'SUCCESS', message:'Added User', data:thread}, status: :ok 
                else
                render json: {status: 'ERROR', message:'User not added', data:thread.errors}, status: :unprocessable_entity
                end

            end

            private 

            def profile_params
              params.permit(:user)
            end

        end
   end
end
