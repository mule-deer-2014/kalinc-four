get '/' do
  session['current_player'] = '1'
  erb :index
end
