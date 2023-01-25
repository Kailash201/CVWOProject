module Api
    module V1
        class ProfilesController < ApplicationController
            def index
                profiles = Profile.all
                render json: {status: 'SUCCESS', message:'Get Profiles', data:profiles}, status: :ok
            end

            def show
                profile = Profile.find(params[:id])
                render json: {status: 'SUCCESS', message:'Single profile', data:profile}, status: :ok 
            end

            def create
                profile = Profile.new(profile_params)

                if profile.save
                render json: {status: 'SUCCESS', message:'Added User', data:profile}, status: :ok 
                else
                render json: {status: 'ERROR', message:'User not added', data:profile.errors}, status: :unprocessable_entity
                end

            end

            private 

            def profile_params
              params.permit(:user)
            end

        end
   end
end
