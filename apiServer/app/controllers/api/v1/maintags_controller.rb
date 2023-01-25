module Api
    module V1
        class MaintagsController < ApplicationController
            def index
                tags = Maintag.all
                render json: {status: 'SUCCESS', message:'Get Tags', data:tags}, status: :ok
            end

            def show
                tags = Maintag.find(params[:id])
                render json: {status: 'SUCCESS', message:'Single tag', data:tags}, status: :ok 
            end

            def create
                tag = Maintag.new(tag_params)

                if tag.save
                render json: {status: 'SUCCESS', message:'Added Tag', data:tag}, status: :ok 
                else
                render json: {status: 'ERROR', message:'User not added', data:tag.errors}, status: :unprocessable_entity
                end

            end

            def destroy
                thread = ThreadList.find(params[:threadlist_id])
                tag = thread.tags.find(params[:id]).destroy

                render json: {status: 'SUCCESS', message:'deleted Comment', data:tag}, status: :ok 
    
            end

            private 

            def tag_params
              params.permit(:name)
            end

        end
   end
end

