require 'rake'
require 'colorize'
require 'sass'
require 'rake/minify'

desc "build sass"
task :sass  do
  
  begin
    system "sass --update --stop-on-error ./test/css/scss:./test/css --style compressed"
    puts "sass build complete".colorize(:green)
  end

end

# desc "minify sizerizr script"
Rake::Minify.new(:script) do

  dir("script") do # we specify only the source directory
    add("./script/sizrizr.min.js", "sizrizr.js")
    add("./test/scripts/sizrizr.min.js", "sizrizr.js")
  end
  puts "Scripts Minified".colorize( :green )

end

desc "build test site"
task :build do

  begin
    Rake::Task["sass"].invoke
    Rake::Task["script"].invoke
    puts "Build process complete".colorize(:green)
  end

end

desc 'run simple python server at /test'
task :server do

  begin
    puts "Starting Server"
    system "cd test && python -m SimpleHTTPServer 8000"
  end

end

desc 'run build and server'
task :refresh do

  begin
    Rake::Task["build"].invoke
    Rake::Task["server"].invoke
  end

end