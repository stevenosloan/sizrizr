$LOAD_PATH << File.join( Dir.pwd, '/lib' )


#   Assets
# -----------------------------------------

set :css_dir, 'assets/css'
set :js_dir, 'scripts'


#   Markup
# -----------------------------------------

set :haml, { format: :html5 }


#   Helpers
# -----------------------------------------

require 'view_helpers'
helpers ViewHelpers


#   Build Specific Config
# -----------------------------------------

configure :build do

  require 'uglifier'

  # ignore everything
  ignore "**/*"
  ignore "index.html"

  # proxy sizrizr to root
  proxy "/sizrizr.js", "/scripts/sizrizr.js"

  after_build do
    sizrizr_path = File.join( build_dir, "sizrizr.js" )
    sizrizr_min_path = File.join( build_dir, "sizrizr.min.js" )

    sizrizr_min = Uglifier.new.compile(File.read(sizrizr_path))
    File.open( sizrizr_min_path, 'w' ) { |f| f.write(sizrizr_min) }
  end

end