require 'colorize'

# Add ./lib to the load path
$LOAD_PATH << File.join( Dir.pwd, '/lib' )

# Import namespaces from /tasks
Dir.glob('tasks/*.rake').each { |r| import r }

task :server do
  Rake::Task["middleman:server"].invoke
end

task :build do
  minimized_path = File.join( Dir.pwd, "build/sizrizr.min.js" )
  minimized_size = File.new( minimized_path ).size
  Rake::Task["middleman:build"].invoke
  new_minimized_size = File.new( minimized_path ).size

  puts "orginal size: #{minimized_size}"
  puts "new size: #{new_minimized_size}"
  print "\ndifference: "
  color = ( new_minimized_size > minimized_size ) ? :red : :green
  print "#{new_minimized_size - minimized_size}".colorize(color)
  puts "\n\n-----------------------------------\n\n"
end