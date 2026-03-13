import Map "mo:core/Map";
import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Runtime "mo:core/Runtime";
import Order "mo:core/Order";
import Text "mo:core/Text";

actor {
  type Submission = {
    name : Text;
    email : Text;
    message : Text;
    timestamp : Int;
  };

  module Submission {
    public func compare(sub1 : Submission, sub2 : Submission) : Order.Order {
      Text.compare(sub1.email, sub2.email);
    };
  };

  let submissions = Map.empty<Int, Submission>();

  public shared ({ caller }) func submitForm(name : Text, email : Text, message : Text) : async () {
    let timestamp = 0;
    let submission : Submission = {
      name;
      email;
      message;
      timestamp;
    };
    submissions.add(timestamp, submission);
  };

  public query ({ caller }) func getSubmissions() : async [Submission] {
    submissions.values().toArray();
  };

  public query ({ caller }) func getSubmission(id : Int) : async Submission {
    switch (submissions.get(id)) {
      case (null) { Runtime.trap("Submission does not exist") };
      case (?submission) { submission };
    };
  };
};
