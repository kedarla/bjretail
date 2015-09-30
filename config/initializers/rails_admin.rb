RailsAdmin.config do |config|

  ### Popular gems integration

  ## == Devise ==
   config.authenticate_with do
     warden.authenticate! scope: :user
   end
   config.current_user_method(&:current_user)
 config.authorize_with do |controller|
    unless current_user.email == 'admin@gmaill.com'
      render :text => "You are not an admin"
       
    end
  end
  
  
  ## == Cancan ==
  # config.authorize_with :cancan

  ## == PaperTrail ==
  # config.audit_with :paper_trail, 'User', 'PaperTrail::Version' # PaperTrail >= 3.0.0

  ### More at https://github.com/sferik/rails_admin/wiki/Base-configuration

  config.actions do
    dashboard                     # mandatory
    index                         # mandatory
    new
    export
    bulk_delete
    show
    edit
    delete
    show_in_app

    ## With an audit adapter, you can add:
    # history_index
    # history_show
  end

  config.model 'Enable' do
    label "On Select" 
    label_plural "On Selects"
  end

  config.model 'Option' do
    list do
      field :id
      field :name
      field :part
      field :photo
      field :printable_photo
      field :position do # (1)
        column_width 50
      end
      field :is_default do # (1)
        column_width 50
      end
      field :created_at
      field :updated_at
    end
    exclude_fields :disables, :disablers, :enables, :enablers
  end

  config.model 'Part' do
    field :name
    field :display_type
    field :garment
    field :parent_id, :enum do
      enum_method do
        :parent_enum
      end
    end
    field :position
  end

end
