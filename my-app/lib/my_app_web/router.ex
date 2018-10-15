defmodule MyAppWeb.Router do
  use MyAppWeb, :router

  pipeline :api do
    plug CORSPlug, origin: "*"
    plug :accepts, ["json"]
  end

  scope "/api", MyAppWeb do
    pipe_through :api
    resources "/users", UserController, except: [:new, :edit]
    options   "/users", UserController, :options
  end
end
