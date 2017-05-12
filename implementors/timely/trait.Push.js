(function() {var implementors = {};
implementors["timely"] = ["impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + 'static, D:&nbsp;<a class=\"trait\" href=\"abomonation/trait.Abomonation.html\" title=\"trait abomonation::Abomonation\">Abomonation</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + 'static&gt; <a class=\"trait\" href=\"timely/trait.Push.html\" title=\"trait timely::Push\">Push</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a>T, <a class=\"enum\" href=\"timely/dataflow/channels/message/enum.Content.html\" title=\"enum timely::dataflow::channels::message::Content\">Content</a>&lt;D&gt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>&gt; for <a class=\"struct\" href=\"timely/dataflow/channels/pushers/tee/struct.Tee.html\" title=\"struct timely::dataflow::channels::pushers::tee::Tee\">Tee</a>&lt;T, D&gt;","impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + 'static, D:&nbsp;<a class=\"trait\" href=\"timely/trait.Data.html\" title=\"trait timely::Data\">Data</a> + <a class=\"trait\" href=\"abomonation/trait.Abomonation.html\" title=\"trait abomonation::Abomonation\">Abomonation</a>, P:&nbsp;<a class=\"trait\" href=\"timely/trait.Push.html\" title=\"trait timely::Push\">Push</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a>T, <a class=\"enum\" href=\"timely/dataflow/channels/message/enum.Content.html\" title=\"enum timely::dataflow::channels::message::Content\">Content</a>&lt;D&gt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>&gt;, H:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/trait.Fn.html\" title=\"trait core::ops::Fn\">Fn</a>(&amp;T, &amp;D) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>&gt; <a class=\"trait\" href=\"timely/trait.Push.html\" title=\"trait timely::Push\">Push</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a>T, <a class=\"enum\" href=\"timely/dataflow/channels/message/enum.Content.html\" title=\"enum timely::dataflow::channels::message::Content\">Content</a>&lt;D&gt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>&gt; for <a class=\"struct\" href=\"timely/dataflow/channels/pushers/exchange/struct.Exchange.html\" title=\"struct timely::dataflow::channels::pushers::exchange::Exchange\">Exchange</a>&lt;T, D, P, H&gt;","impl&lt;T, D, P:&nbsp;<a class=\"trait\" href=\"timely/trait.Push.html\" title=\"trait timely::Push\">Push</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a>T, <a class=\"enum\" href=\"timely/dataflow/channels/message/enum.Content.html\" title=\"enum timely::dataflow::channels::message::Content\">Content</a>&lt;D&gt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>&gt;&gt; <a class=\"trait\" href=\"timely/trait.Push.html\" title=\"trait timely::Push\">Push</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a>T, <a class=\"enum\" href=\"timely/dataflow/channels/message/enum.Content.html\" title=\"enum timely::dataflow::channels::message::Content\">Content</a>&lt;D&gt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>&gt; for <a class=\"struct\" href=\"timely/dataflow/channels/pushers/counter/struct.Counter.html\" title=\"struct timely::dataflow::channels::pushers::counter::Counter\">Counter</a>&lt;T, D, P&gt; <span class=\"where fmt-newline\">where T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + 'static</span>","impl&lt;T, D&gt; <a class=\"trait\" href=\"timely/trait.Push.html\" title=\"trait timely::Push\">Push</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a>T, <a class=\"enum\" href=\"timely/dataflow/channels/message/enum.Content.html\" title=\"enum timely::dataflow::channels::message::Content\">Content</a>&lt;D&gt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>&gt; for <a class=\"struct\" href=\"timely/dataflow/channels/pact/struct.Pusher.html\" title=\"struct timely::dataflow::channels::pact::Pusher\">Pusher</a>&lt;T, D&gt;",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
