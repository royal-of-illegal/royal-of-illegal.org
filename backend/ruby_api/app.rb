require 'sinatra'

get '/api/data' do
  content_type :json
  { message: "Ruby backend is live!" }.to_json
end
