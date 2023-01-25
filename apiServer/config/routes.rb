Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  namespace 'api' do
    namespace 'v1' do
      resources :profiles do
        resources :threadlists 
      end
      resources :profiles
      resources :maintags
      resources :tags

      resources :threadlists do
        resources :comments
      end
      resources :profiles do
        resources :comments
      end
      resources :threadlists do
        resources :tags
      end
    end
  end
end
