## Section 03: THe Race Track

#### Table of Contents

- Intro Race
- Theory - Token Concept
- Theory - Parallel Gateway
- Practical - Process Racing
- Summary
- Quiz 2: Quiz
- Exercise

### Intro Race

### Theory - Token Concept

Imagine the token as a ball or marble. The token rolls through the process, from
start to end event. The **token** passes all kinds of tasks and gateways that
impact it.

<div align="center">
<img src="./tasks.png" width="50%">
</div>

The real **strength** of the **token concept** is to **visualize** how different
**gateways** work. The token follows the selected path.

<div align="center">
<img src="./token_path.png" width="50%">
</div>

### Theory - Parallel Gateway

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
		<td><img src='./parallel_gateway_1.png' width=100 height=100></td>
        <td>Parallel Gateway</td>
		<td>
        <p>No decision making</p>
        <p>All outgoing branches are activated</p>
        </td>
	</tr>
    <tr>
		<td><img src='./parallel_gateway_2.png' width=100 height=100></td>
        <td>Parallel Gateway (open)</td>
		<td>
        <p>The token is cloned</p>
        <p>One cloned token per outgoing branch</p>
        </td>
	</tr>
    <tr>
		<td><img src='./parallel_gateway_3.png' width=100 height=100></td>
        <td>Parallel Gateway (close)</td>
		<td>
        <p>All tokens are merged into one</p>
        </td>
	</tr>
</tbody>
</table>

<div align="center">
<img src="./not_equal.png" width="50%">
</div>

Build **mental bridges** to clearly **distinguish** the **gateways**.

### Practical - Process Racing

To become the champion Gonzales has to win today. Gonzales' team has to do the
following simultaneously:

- change the tires
- fill up the fuel tank

![Racing Process 1](./racing_process_1.png)

![Racing Process 2](./racing_process_2.png)

![Racing Process 3](./racing_process_3.png)

### Summary

The **token concept empowers** you to understand **even** complex business
processes.

<div align="center">
<img src="./bpmn_toolkit_2.png" width="50%">
</div>

### Quiz 2: Quiz

#### Question 1:

The Parallel Gateway defines a decision point.

Correct. The Parallel Gateway always activates all paths. This means that no
decision is made.

#### Question 2:

The Closing Parallel Gateway waits until all tokens have arrived and then merges
all token into one.

Correct. ​The Closing Parallel Gateway waits for all incoming tokens. When all
of them have arrived it merges them into one​. After that, the token gets
forwarded and the process continues.

### Exercise

**Gonzales has an idea**. As his fuel team acted a bit slow the last time, he
talks to his manager and tells him:

When I arrive at the box, both teams start to work in parallel as usual. The
wheel team simply changes the wheels. The fuel team however, first checks how
many rounds are left. If 5 or less rounds are left, the fuel team will fill only
half of the gas tank. If more than 5 round are left, the entire gas tank needs
to be filled. So the fuel refill is faster when 5 or less rounds are left.

Your job now is to help the head of mechanics to map the process so he can
**effectively communicate** the procedure with his team.

![Exercise Diagram](./exercise_diagram.svg)

[Exercise BPMN](./exercise_diagram.bpmn)
