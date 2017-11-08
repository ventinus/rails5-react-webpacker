Rails.application.routes.draw do

  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  end

  post "/graphql", to: "graphql#execute"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [ :index, :show ]
    resources :instructors, only: [ :index, :show ]
    resources :courses, only: [ :index, :show ]
    resources :locations, only: [ :index, :show ]
  end


  get '/' => 'pages#index'
  get '/:page' => 'pages#index'
end
