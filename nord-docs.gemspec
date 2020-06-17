# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "nord-docs"
  spec.version       = "0.1.5"
  spec.authors       = ["Nobody912"]
  spec.email         = ["41035180+Nobody912@users.noreply.github.com"]

  spec.summary       = "Nord theme basic documentation."
  spec.homepage      = "https://nobody912.github.io"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.1"
end
