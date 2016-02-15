Ext.data.JsonP.Autolinker_match_Phone({"tagname":"class","name":"Autolinker.match.Phone","autodetected":{},"files":[{"filename":"Phone.js","href":"Phone.html#Autolinker-match-Phone"}],"extends":"Autolinker.match.Match","members":[{"name":"matchedText","tagname":"property","owner":"Autolinker.match.Match","id":"property-matchedText","meta":{"protected":true}},{"name":"number","tagname":"property","owner":"Autolinker.match.Phone","id":"property-number","meta":{"protected":true}},{"name":"offset","tagname":"property","owner":"Autolinker.match.Match","id":"property-offset","meta":{"protected":true}},{"name":"plusSign","tagname":"property","owner":"Autolinker.match.Phone","id":"property-plusSign","meta":{"protected":true}},{"name":"constructor","tagname":"method","owner":"Autolinker.match.Phone","id":"method-constructor","meta":{}},{"name":"getAnchorHref","tagname":"method","owner":"Autolinker.match.Phone","id":"method-getAnchorHref","meta":{}},{"name":"getAnchorText","tagname":"method","owner":"Autolinker.match.Phone","id":"method-getAnchorText","meta":{}},{"name":"getMatchedText","tagname":"method","owner":"Autolinker.match.Match","id":"method-getMatchedText","meta":{}},{"name":"getNumber","tagname":"method","owner":"Autolinker.match.Phone","id":"method-getNumber","meta":{}},{"name":"getOffset","tagname":"method","owner":"Autolinker.match.Match","id":"method-getOffset","meta":{}},{"name":"getType","tagname":"method","owner":"Autolinker.match.Phone","id":"method-getType","meta":{}},{"name":"setOffset","tagname":"method","owner":"Autolinker.match.Match","id":"method-setOffset","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-Autolinker.match.Phone","short_doc":"Represents a Phone number match found in an input string which should be\nAutolinked. ...","component":false,"superclasses":["Autolinker.match.Match"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Autolinker.match.Match' rel='Autolinker.match.Match' class='docClass'>Autolinker.match.Match</a><div class='subclass '><strong>Autolinker.match.Phone</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/Phone.html#Autolinker-match-Phone' target='_blank'>Phone.js</a></div></pre><div class='doc-contents'><p>Represents a Phone number match found in an input string which should be\nAutolinked.</p>\n\n<p>See this class's superclass (<a href=\"#!/api/Autolinker.match.Match\" rel=\"Autolinker.match.Match\" class=\"docClass\">Autolinker.match.Match</a>) for more\ndetails.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-matchedText' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Autolinker.match.Match' rel='Autolinker.match.Match' class='defined-in docClass'>Autolinker.match.Match</a><br/><a href='source/Match.html#Autolinker-match-Match-property-matchedText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Match-property-matchedText' class='name expandable'>matchedText</a> : String<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-number' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.match.Phone'>Autolinker.match.Phone</span><br/><a href='source/Phone.html#Autolinker-match-Phone-property-number' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Phone-property-number' class='name expandable'>number</a> : String<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>(required)\n\nThe phone number that was matched, without any delimiter characters. ...</div><div class='long'><p>(required)</p>\n\n<p>The phone number that was matched, without any delimiter characters.</p>\n\n<p>Note: This is a string to allow for prefixed 0's.</p>\n</div></div></div><div id='property-offset' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Autolinker.match.Match' rel='Autolinker.match.Match' class='defined-in docClass'>Autolinker.match.Match</a><br/><a href='source/Match.html#Autolinker-match-Match-property-offset' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Match-property-offset' class='name expandable'>offset</a> : Number<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-plusSign' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.match.Phone'>Autolinker.match.Phone</span><br/><a href='source/Phone.html#Autolinker-match-Phone-property-plusSign' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Phone-property-plusSign' class='name expandable'>plusSign</a> : Boolean<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>(required)\n\ntrue if the matched phone number started with a '+' sign. ...</div><div class='long'><p>(required)</p>\n\n<p><code>true</code> if the matched phone number started with a '+' sign. We'll include\nit in the <code>tel:</code> URL if so, as this is needed for international numbers.</p>\n\n<p>Ex: '+1 (123) 456 7879'</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.match.Phone'>Autolinker.match.Phone</span><br/><a href='source/Phone.html#Autolinker-match-Phone-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Autolinker.match.Phone-method-constructor' class='name expandable'>Autolinker.match.Phone</a>( <span class='pre'>matchedText, offset, number, plusSign</span> ) : <a href=\"#!/api/Autolinker.match.Phone\" rel=\"Autolinker.match.Phone\" class=\"docClass\">Autolinker.match.Phone</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>matchedText</span> : String<div class='sub-desc'><p>The original text that was matched.</p>\n</div></li><li><span class='pre'>offset</span> : Number<div class='sub-desc'><p>The offset of where the match was made in the\n  input string.</p>\n</div></li><li><span class='pre'>number</span> : String<div class='sub-desc'><p>The phone number that was matched, without any\n  delimiter characters. See <a href=\"#!/api/Autolinker.match.Phone-property-number\" rel=\"Autolinker.match.Phone-property-number\" class=\"docClass\">number</a> for more details.</p>\n</div></li><li><span class='pre'>plusSign</span> : Boolean<div class='sub-desc'><p><code>true</code> if the matched phone number started with\n  a '+' sign. See <a href=\"#!/api/Autolinker.match.Phone-property-plusSign\" rel=\"Autolinker.match.Phone-property-plusSign\" class=\"docClass\">plusSign</a> for more details.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Autolinker.match.Phone\" rel=\"Autolinker.match.Phone\" class=\"docClass\">Autolinker.match.Phone</a></span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/Autolinker.match.Match-method-constructor\" rel=\"Autolinker.match.Match-method-constructor\" class=\"docClass\">Autolinker.match.Match.constructor</a></p></div></div></div><div id='method-getAnchorHref' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.match.Phone'>Autolinker.match.Phone</span><br/><a href='source/Phone.html#Autolinker-match-Phone-method-getAnchorHref' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Phone-method-getAnchorHref' class='name expandable'>getAnchorHref</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the anchor href that should be generated for the match. ...</div><div class='long'><p>Returns the anchor href that should be generated for the match.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/Autolinker.match.Match-method-getAnchorHref\" rel=\"Autolinker.match.Match-method-getAnchorHref\" class=\"docClass\">Autolinker.match.Match.getAnchorHref</a></p></div></div></div><div id='method-getAnchorText' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.match.Phone'>Autolinker.match.Phone</span><br/><a href='source/Phone.html#Autolinker-match-Phone-method-getAnchorText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Phone-method-getAnchorText' class='name expandable'>getAnchorText</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the anchor text that should be generated for the match. ...</div><div class='long'><p>Returns the anchor text that should be generated for the match.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/Autolinker.match.Match-method-getAnchorText\" rel=\"Autolinker.match.Match-method-getAnchorText\" class=\"docClass\">Autolinker.match.Match.getAnchorText</a></p></div></div></div><div id='method-getMatchedText' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Autolinker.match.Match' rel='Autolinker.match.Match' class='defined-in docClass'>Autolinker.match.Match</a><br/><a href='source/Match.html#Autolinker-match-Match-method-getMatchedText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Match-method-getMatchedText' class='name expandable'>getMatchedText</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the original text that was matched. ...</div><div class='long'><p>Returns the original text that was matched.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getNumber' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.match.Phone'>Autolinker.match.Phone</span><br/><a href='source/Phone.html#Autolinker-match-Phone-method-getNumber' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Phone-method-getNumber' class='name expandable'>getNumber</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the phone number that was matched as a string, without any\ndelimiter characters. ...</div><div class='long'><p>Returns the phone number that was matched as a string, without any\ndelimiter characters.</p>\n\n<p>Note: This is a string to allow for prefixed 0's.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getOffset' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Autolinker.match.Match' rel='Autolinker.match.Match' class='defined-in docClass'>Autolinker.match.Match</a><br/><a href='source/Match.html#Autolinker-match-Match-method-getOffset' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Match-method-getOffset' class='name expandable'>getOffset</a>( <span class='pre'></span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the offset of where the match was made in the input string. ...</div><div class='long'><p>Returns the offset of where the match was made in the input string. This\nis the 0-based index of the match.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.match.Phone'>Autolinker.match.Phone</span><br/><a href='source/Phone.html#Autolinker-match-Phone-method-getType' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Phone-method-getType' class='name expandable'>getType</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns a string name for the type of match that this class represents. ...</div><div class='long'><p>Returns a string name for the type of match that this class represents.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/Autolinker.match.Match-method-getType\" rel=\"Autolinker.match.Match-method-getType\" class=\"docClass\">Autolinker.match.Match.getType</a></p></div></div></div><div id='method-setOffset' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Autolinker.match.Match' rel='Autolinker.match.Match' class='defined-in docClass'>Autolinker.match.Match</a><br/><a href='source/Match.html#Autolinker-match-Match-method-setOffset' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.match.Match-method-setOffset' class='name expandable'>setOffset</a>( <span class='pre'>offset</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the offset of where the match was made in the input string. ...</div><div class='long'><p>Sets the <a href=\"#!/api/Autolinker.match.Match-property-offset\" rel=\"Autolinker.match.Match-property-offset\" class=\"docClass\">offset</a> of where the match was made in the input string.</p>\n\n<p>A <a href=\"#!/api/Autolinker.matcher.Matcher\" rel=\"Autolinker.matcher.Matcher\" class=\"docClass\">Autolinker.matcher.Matcher</a> will be fed only HTML text nodes,\nand will therefore set an original offset that is relative to the HTML\ntext node itself. However, we want this offset to be relative to the full\nHTML input string, and thus if using <a href=\"#!/api/Autolinker-method-parse\" rel=\"Autolinker-method-parse\" class=\"docClass\">Autolinker.parse</a> (rather\nthan calling a <a href=\"#!/api/Autolinker.matcher.Matcher\" rel=\"Autolinker.matcher.Matcher\" class=\"docClass\">Autolinker.matcher.Matcher</a> directly), then this\noffset is corrected after the Matcher itself has done its job.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>offset</span> : Number<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});