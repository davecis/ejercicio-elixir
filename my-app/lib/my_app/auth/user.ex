defmodule MyApp.Auth.User do
  use Ecto.Schema
  import Ecto.Changeset


  schema "users" do
    field :number, :string
    field :name, :string

    timestamps()
  end

  @doc false
  def changeset(user, attrs) do
    user
    |> cast(attrs, [:name, :number])
    |> validate_required([:name, :number])
    |> unique_constraint(:name)
  end
end
