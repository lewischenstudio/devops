## Section 02: The Shoe Shop

#### Table of Contents

- Introduction
- Theory - Task, Start & End Event, Pools & Lanes
- Practical - Process of Manual Tasks in the Retail Industry (Part 1)
- Practical - Process of Manual Tasks in the Retail Industry (Part 2)
- Summary
- Quiz 1: Quiz
- Tool (BPMN.io) Demo
- Exercise

### Introduction

### Theory - Task, Start & End Event, Pools & Lanes

<div align="center">
<img src="./core_objects.png" width="70%">
</div>

<table>
<thead>
	<tr>
		<th>Symbol</th>
        <th>Name</th>
		<th>Function</th>
	</tr>
</thead>
<tbody>
	<tr>
		<td><img src='./startevent.png' width=100 height=100></td>
        <td>Start Event</td>
		<td>The Start Event triggers the process</td>
	</tr>
    <tr>
		<td><img src='./endevent.png' width=100 height=100></td>
        <td>End Event</td>
		<td>The End Event defines the state that terminates the process</td>
	</tr>
    <tr>
		<td><img src='./activity.png' width=100 height=100></td>
        <td>Activity</td>
		<td>An activity or task is a unit of work -- the job to be done</td>
	</tr>
    <tr>
		<td><img src='./exclusive_gateway_1.png' width=100 height=100></td>
		<td>Exclusive Gateway</td>
        <td>Defines a decision point</td>
	</tr>
    <tr>
		<td><img src='./exclusive_gateway_2.png' width=100 height=100></td>
        <td>Exclusive Gateway (open)</td>
		<td>Only one path can be taken</td>
	</tr>
    <tr>
		<td><img src='./exclusive_gateway_3.png' width=100 height=100></td>
        <td>Exclusive Gateway (close)</td>
		<td>
        <p>Connects branches</p>
        <p>No logic involved</p>
        </td>
	</tr>
    <tr>
		<td><img src='./pools_lanes.png' width=100 height=100></td>
        <td>Pools and Lanes</td>
		<td>
        <p>Pools and lanes represent responsibilities for activities in a process</p>
        <p>Lanes subdivide pools (roles, departments, systems)</p>
        </td>
	</tr>
</tbody>
</table>

### Practical - Process of Manual Tasks in the Retail Industry (Part 1)

#### The Shoe Store

Real Business Process -- All New Concepts Applies

It's Max's first week as a shop assistant. One of Max's customers can't find the
right shoe size! Max wonders how to solve this situation. Max decides to look at
the business process!

#### Missing Show Size Process

![Missing Show Size Process 1](./missing_show_size_process_1.png)

### Practical - Process of Manual Tasks in the Retail Industry (Part 2)

Procedures can be communicated in a **clear** and **expressive** way.

Processes change typically because of growth or technological change.

All new Shop Assistants have **no clue** how to handle their new tasks. The
process can also **change because of growth**. For example, a **warehouse
manager** is hired.

![Missing Show Size Process 2](./missing_show_size_process_2.png)

### Summary

<div align="center">
<img src="./bpmn_toolkit.png" width="70%">
</div>

### Quiz 1: Quiz

#### Question 1:

The Exclusive Gateway defines a decision point.

Correct. The Exclusive Gateway can activate only one path. This means that a
decision needs to be made that determines which path to take.

#### Question 2:

The Closing Exclusive Gateway only forwards the arriving token without applying
any logic.

Correct. The Closing Exclusive Gateway is not very 'smart', it only forwards the
arriving token without applying any logic.

#### Question 3:

Lanes always describe the location where the process takes place.

Correct. Lanes define the resource (Roles, Departments or System) that are
responsible for the execution of the activities that are in the lane.

### Tool (BPMN.io) Demo

www.BPMN.io --> Try Online --> [New Diagram](https://demo.bpmn.io/new)

![BPMN.io](./bpmn_io.png)

### Exercise

Max is facing a **new challenge**. He receives a shipment from the wholesaler
and doesn’t know what to do next. His boss tells him:

No worries Max. First you check whether the order and the invoice are correct.
If not, you give the package back to the shipping clerk. If it’s correct you
check if it’s a standard order or if it’s an ordered by a customer. If it’s a
standard order you simply put the shoes into the warehouse. If it’s an order for
a customer, put the shoes behind the cash deck and that’s it!

Your job now is to help Max by **creating a simple process**. Ignore the tasks
of the shipping clerk for now. Just model what Max needs to do.

![Exercise Diagram](./exercise_diagram.svg)

[Exercise BPMN](./exercise_diagram.bpmn)
