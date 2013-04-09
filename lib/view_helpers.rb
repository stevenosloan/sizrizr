module ViewHelpers

  def render_partial( partial_name, locals={} )
    partial "partials/_#{partial_name}", :locals => locals
  end

end