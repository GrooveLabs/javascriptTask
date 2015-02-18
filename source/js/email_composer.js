/** @jsx React.DOM */

//structure
//   EmailComposer
//     OpenedEmailForms - contains all opened "new email" windows
//       EmailForm - a single "new email" window

var EmailComposer = React.createClass({
  handleComposeButton: function(event) {
    this.setState({
      data: this.state.data.concat([
        {email: {emailTo: null, emailSubject: null, emailBody: '', uniqId: (new Date()).getTime() }}
      ])
    });
  },

  getInitialState: function() {
    // data contains opened "new email" windows
    return { data: [] };
  },

  handleEmailFormClose: function(uniqId) {
    var newData = jQuery.grep(this.state.data, function(data, idx ) {
    return ( data.email.uniqId != uniqId );
    });

    this.setState({
      data: newData
    })
  },

  render: function() {
    return (
      <div className="email-composer">
        <button className="btn btn-danger" onClick={this.handleComposeButton}>COMPOSE</button>
        <OpenedEmailForms data={ this.state.data } onEmailFormClose={ this.handleEmailFormClose }  />
      </div>
    );
  }

});


var OpenedEmailForms = React.createClass({
  handleEmailFormClose: function(uniqId) {
    this.props.onEmailFormClose(uniqId);
  },

  render: function() {
    var self = this
    var emailForms = this.props.data.map(function (emailForm) {
      return (
        <EmailForm email={ emailForm.email } onEmailFormClose={ self.props.onEmailFormClose }/>
      );
    });

    return (
      <div className="opened-emails-forms">
        { emailForms }
      </div>
    );
  }
});

var EmailForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    console.info("To      : " + this.refs.emailTo.getDOMNode().value.trim());
    console.info("Subject : " + this.refs.emailSubject.getDOMNode().value.trim());
    console.info("Body    : " + $(this.refs.emailBody.getDOMNode()).text());
    // if(!emailTo){
      //TODO required fields
    // }
    this.handleClose(this.refs.uniqId);
  },

  handleSubjectChange: function(e) {
    $(this.refs.subjectOnHeader.getDOMNode()).
      html(this.refs.emailSubject.getDOMNode().value.trim() || 'New Message');
  },

  handleClose: function(e) {
    this.props.onEmailFormClose(this.props.email.uniqId);
  },

  handleToggleSize: function(e) {
    $(this.getDOMNode()).toggleClass(function() {
      if ( $( this ).is( ".min-window" ) ) {
        $( this ).removeClass('min-window');
        return "max-window";
      } else {
        return "min-window";
      }
    });
  },

  render: function() {
    return (

      <div id={ this.props.email.uniqId } className="window max-window">
        <form className="email-form" onSubmit={this.handleSubmit}>
          <div className="panel panel-default">
            <div className="panel-heading"> 
              <div className="pull-right">
                <span className="glyphicon trigger min-max-trigger"  onClick={ this.handleToggleSize }>
                  _
                </span>
                <span className="glyphicon trigger close-trigger" onClick={ this.handleClose }>
                  ×
                </span>
              </div>
              <span className="subject-on-header" ref="subjectOnHeader">
                { this.props.subject || 'New Message' }
              </span>
            </div>
            <div className="panel-body">
                <input type="text" placeholder="To" ref="emailTo" />
                <input type="text" placeholder="Subject" ref="emailSubject" onChange={ this.handleSubjectChange } />
                <div className="email-body" contentEditable="true" ref="emailBody" >
                  { this.props.email.emailBody }
                </div>
            </div>
            <div className="panel-footer">
              <input type="submit" value="Send" className='btn btn-success' />
            </div>
          </div>
        </form>
      </div>
    );
  }

});


React.render(<EmailComposer />, document.body);

