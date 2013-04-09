desc "the middleman related tasks"
namespace :middleman do

  desc "kickoff the preview server"
  task :server do
    system "bundle exec middleman server"
  end

  desc "build the stuff"
  task :build, :glob do |t,args|

    env = ENV['env'] || "production"

    require 'benchmark'
    time = Benchmark.realtime do
      cmd = "export BUILD_ENV=#{env} && echo building for $BUILD_ENV && "
      if args[:glob]
        cmd << "bundle exec middleman build -g #{args[:glob]}"
      else
        cmd << "bundle exec middleman build --clean"
      end
      system cmd
    end
    puts "\n\n-----------------------------------\n\n"
    puts "built in: #{time}s"
  end

  desc "preview the built site running on rack"
  task :preview do
    Rake::Task["middleman:build"].invoke
    system "bundle exec thin start -R preview.ru -p 5000"
  end

end