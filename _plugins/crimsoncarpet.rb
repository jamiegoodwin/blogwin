require "redcarpet"
require "rouge"
require "rouge/plugins/redcarpet"

class Crimsoncarpet < Redcarpet::Render::HTML
    include Rouge::Plugins::Redcarpet
    def image(link, title, alt)
        name = File.basename(link, ".*")
        img = "<img 
            class=\"lazyload\"
            data-src=\"#{link}\"
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