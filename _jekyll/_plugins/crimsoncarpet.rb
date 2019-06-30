require "redcarpet"
require "rouge"
require "rouge/plugins/redcarpet"

class Crimsoncarpet < Redcarpet::Render::HTML
    include Rouge::Plugins::Redcarpet
    def image(link, title, alt)
        name = File.basename(link).downcase
        img = "<img 
            class=\"lazyload\"
            data-src=\"/assets/img/large/#{name}\"
            data-srcset=\"/assets/img/small/#{name} 320w,
                            /assets/img/medium/#{name} 480w,
                            /assets/img/large/#{name} 800w\"
            data-sizes=\"auto\"
            alt=\"#{alt}\"
            title=\"#{title}\"
        >"
        return "#{img}"
    end
end

class Jekyll::Converters::Markdown::Crimsoncarpet
    def initialize(config)
        @config = config
        options = {
            strikethrough: true,
            no_intra_emphasis: true,
            tables: true,
            space_after_headers: true,
            underline: true,
            footnotes: true,
            fenced_code_blocks: true
        }
        @renderer = Redcarpet::Markdown.new(Crimsoncarpet, options)
    end

    def convert(content)
        @renderer.render(content)
    end
end