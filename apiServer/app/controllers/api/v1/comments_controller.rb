module Api
    module V1
        class CommentsController < ApplicationController
            def index
                thread = ThreadList.find(params[:threadlist_id])
                comments = thread.comments.all
                render json: {status: 'SUCCESS', message:'Get Comments', data:comments}, status: :ok
              end

            def show
                thread = ThreadList.find(params[:threadlist_id])
                comment = thread.comments.find(params[:id])
                render json: {status: 'SUCCESS', message:'Single Comment', data:comment}, status: :ok 
            end

            def create
                thread = ThreadList.find(params[:threadlist_id])
                comment = thread.comments.create(comment_params)
                
                if comment.save
                  render json: {status: 'SUCCESS', message:'Added Comment', data:comment}, status: :ok 
                else
                  render json: {status: 'ERROR', message:'Comment not added', data:comment.errors}, status: :unprocessable_entity
                end
        
              end

            def update
                thread = ThreadList.find(params[:threadlist_id])
                comment = thread.comments.find(params[:id])
                #comment = Comment.find(params[:id])
            if comment.update(comment_params)
                render json: {status: 'SUCCESS', message:'Updated Comment', data:comment}, status: :ok 
            else
                render json: {status: 'ERROR', message:'Comment not updated', data:comment.errors}, status: :unprocessable_entity 
            end 
                
            end
    
            def destroy
                thread = ThreadList.find(params[:threadlist_id])
                comment = thread.comments.find(params[:id]).destroy
                render json: {status: 'SUCCESS', message:'deleted Comment', data:comment}, status: :ok 
    
            end
            

            private

            def comment_params
                params.permit(:desc, :user)
              end
        

        end
    end
end
